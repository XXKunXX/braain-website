import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { META, isPlan, nutzungKey } from "@/lib/plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/stripe/webhook
 * Empfängt Ereignisse von Stripe. Die Signatur wird immer geprüft;
 * ohne gültige Signatur passiert nichts.
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signatur = req.headers.get("stripe-signature");
  if (!secret || !signatur) {
    return new Response("Signatur fehlt", { status: 400 });
  }

  // Roh-Body verwenden: jede Veränderung (z. B. JSON.parse + stringify) bricht die Signatur.
  const rawBody = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(rawBody, signatur, secret);
  } catch (err) {
    console.warn("[webhook] ungültige Signatur", err);
    return new Response("Ungültige Signatur", { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await kaufAbgeschlossen(event.data.object);
        break;
      case "customer.subscription.updated":
        await aboGeaendert(event);
        break;
      case "customer.subscription.deleted":
        // TODO Instanz-Pool: release an die Instanz des Kunden (Schnittstellenvertrag).
        console.info("[webhook] Abo beendet", event.data.object.id);
        break;
      case "invoice.paid":
        // TODO Instanz-Pool: billing (Status "bezahlt", Sperre aufheben).
        console.info("[webhook] Rechnung bezahlt", event.data.object.id);
        break;
      case "invoice.payment_failed":
        // TODO Instanz-Pool: billing (Status "Zahlung offen"); nach 14 Tagen Nur-Lesen.
        console.info("[webhook] Zahlung fehlgeschlagen", event.data.object.id);
        break;
      default:
        break;
    }
  } catch (err) {
    // 500 => Stripe stellt das Ereignis später erneut zu. Alle Schritte sind wiederholbar gebaut.
    console.error(`[webhook] Fehler bei ${event.type} (${event.id})`, err);
    return new Response("Fehler bei der Verarbeitung", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}

/** Nach erfolgreichem Checkout. Bei Jahreskunden: zweites Abo für die Nutzung anlegen. */
async function kaufAbgeschlossen(session: Stripe.Checkout.Session) {
  if (session.mode !== "subscription" || !session.subscription || !session.customer) return;

  const s = stripe();
  const plan = session.metadata?.[META.plan];
  const takt = session.metadata?.[META.takt];
  const grundAboId = typeof session.subscription === "string" ? session.subscription : session.subscription.id;
  const kundeId = typeof session.customer === "string" ? session.customer : session.customer.id;

  if (takt === "jahr" && isPlan(plan)) {
    const { data: preise } = await s.prices.list({ lookup_keys: [nutzungKey(plan)], active: true, limit: 1 });
    const nutzung = preise[0];
    if (!nutzung) throw new Error(`Nutzungspreis ${nutzungKey(plan)} fehlt`);

    const grundAbo = await s.subscriptions.retrieve(grundAboId);
    const zahlungsmittel =
      typeof grundAbo.default_payment_method === "string"
        ? grundAbo.default_payment_method
        : grundAbo.default_payment_method?.id;

    // Gruppe markieren, damit Kündigungen beide Abos erfassen.
    if (grundAbo.metadata[META.gruppe] !== grundAboId) {
      await s.subscriptions.update(grundAboId, { metadata: { [META.gruppe]: grundAboId } });
    }

    // Doppelte Zustellung abfangen: gibt es das Nutzungsabo schon, nichts tun.
    const { data: vorhandene } = await s.subscriptions.list({ customer: kundeId, status: "all", limit: 20 });
    const schonDa = vorhandene.some(
      (a) => a.metadata[META.gruppe] === grundAboId && a.metadata[META.rolle] === "nutzung",
    );

    // Zusätzlich idempotent über den Schlüssel (schützt bei gleichzeitiger Zustellung).
    if (!schonDa) await s.subscriptions.create(
      {
        customer: kundeId,
        items: [{ price: nutzung.id }],
        default_payment_method: zahlungsmittel,
        automatic_tax: { enabled: true },
        metadata: {
          [META.plan]: plan,
          [META.takt]: "jahr",
          [META.rolle]: "nutzung",
          [META.gruppe]: grundAboId,
        },
      },
      { idempotencyKey: `nutzungsabo-${grundAboId}` },
    );
  }

  // TODO Instanz-Pool: freie Instanz aus dem Register nehmen und assign aufrufen
  // (Kunde, Plan, Kontingent). Danach Zugangsdaten an den Kunden senden.
  console.info("[webhook] Kauf abgeschlossen", { kundeId, grundAboId, plan, takt });
}

/**
 * Jahreskunden haben zwei Abos. Kündigt oder reaktiviert der Kunde eines davon im Portal,
 * gilt das für beide – Ende ist immer das Ende des bezahlten Jahres.
 */
async function aboGeaendert(event: Stripe.CustomerSubscriptionUpdatedEvent) {
  const abo = event.data.object;
  const vorher = event.data.previous_attributes ?? {};
  const kuendigungGeaendert = "cancel_at" in vorher || "cancel_at_period_end" in vorher;
  const gruppe = abo.metadata[META.gruppe];
  if (!kuendigungGeaendert || !gruppe) return;

  const s = stripe();
  const kundeId = typeof abo.customer === "string" ? abo.customer : abo.customer.id;
  const { data: alle } = await s.subscriptions.list({ customer: kundeId, status: "all", limit: 20 });
  const gruppenAbos = alle.filter(
    (a) => a.metadata[META.gruppe] === gruppe && a.status !== "canceled" && a.status !== "incomplete_expired",
  );
  const grundAbo = gruppenAbos.find((a) => a.id === gruppe);
  if (!grundAbo) return;

  const jahresEnde = Math.max(...grundAbo.items.data.map((i) => i.current_period_end));
  const gekuendigt = abo.cancel_at !== null || abo.cancel_at_period_end;
  const soll = gekuendigt ? jahresEnde : null;

  for (const a of gruppenAbos) {
    if (a.cancel_at === soll) continue;
    await s.subscriptions.update(a.id, { cancel_at: soll ?? "" });
  }
}
