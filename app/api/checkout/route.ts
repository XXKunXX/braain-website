import type Stripe from "stripe";
import { stripe, siteUrl } from "@/lib/stripe";
import { META, grundgebuehrKey, isPlan, isTakt, nutzungKey } from "@/lib/plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/checkout  { plan: "starter"|"pro"|"business", takt: "monat"|"jahr" }
 * Antwort: { url } – die Website leitet den Kunden dorthin weiter (Stripe Checkout).
 */
export async function POST(req: Request) {
  // Schalter: Online-Bestellung erst freigeben, wenn CHECKOUT_AKTIV=true gesetzt ist.
  // Solange er fehlt, öffnet die Website stattdessen das Anfrage-Formular.
  if (process.env.CHECKOUT_AKTIV !== "true") {
    return Response.json({ deaktiviert: true }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { plan, takt } = (body ?? {}) as { plan?: unknown; takt?: unknown };
  if (!isPlan(plan) || !isTakt(takt)) {
    return Response.json({ error: "Unbekanntes Paket oder Abrechnungstakt." }, { status: 400 });
  }

  try {
    const s = stripe();
    const keys = [grundgebuehrKey(plan, takt), nutzungKey(plan)];
    const { data: preise } = await s.prices.list({ lookup_keys: keys, active: true, limit: 10 });
    const grund = preise.find((p) => p.lookup_key === keys[0]);
    const nutzung = preise.find((p) => p.lookup_key === keys[1]);
    if (!grund || !nutzung) {
      console.error("[checkout] Preis fehlt in Stripe", { keys, gefunden: preise.map((p) => p.lookup_key) });
      return Response.json({ error: "Dieses Paket ist gerade nicht verfügbar." }, { status: 503 });
    }

    // Monatlich: beide Positionen in einem Abo.
    // Jährlich: nur die Jahres-Grundgebühr; das monatliche Nutzungsabo legt der Webhook an,
    // weil ein Abo keine Preise mit unterschiedlichen Intervallen enthalten kann.
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      takt === "monat"
        ? [{ price: grund.id, quantity: 1 }, { price: nutzung.id }]
        : [{ price: grund.id, quantity: 1 }];

    const meta = {
      [META.plan]: plan,
      [META.takt]: takt,
      [META.rolle]: takt === "monat" ? "komplett" : "grundgebuehr",
    };

    const base = siteUrl();
    const session = await s.checkout.sessions.create({
      mode: "subscription",
      line_items: lineItems,
      locale: "de",
      billing_address_collection: "required",
      name_collection: { business: { enabled: true, optional: false } },
      tax_id_collection: { enabled: true },
      automatic_tax: { enabled: true },
      subscription_data: { metadata: meta },
      metadata: meta,
      success_url: `${base}/?kauf=erfolgreich&session_id={CHECKOUT_SESSION_ID}#preise`,
      cancel_url: `${base}/#preise`,
    });

    if (!session.url) throw new Error("Checkout Session ohne URL");
    return Response.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] Fehler", err);
    return Response.json({ error: "Der Checkout konnte nicht gestartet werden." }, { status: 500 });
  }
}
