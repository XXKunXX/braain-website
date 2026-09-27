/**
 * Pakete und ihre Stripe-Preise.
 *
 * Die Preise werden über lookup_keys geladen, nicht über Preis-IDs.
 * So funktioniert derselbe Code in der Sandbox und im Live-Konto,
 * solange die Preise dort dieselben lookup_keys tragen.
 *
 * Abrechnungsmodell (entschieden 26.09.2026):
 * - Monatlich: EIN Abo mit Grundgebühr (monatlich) + Nutzungspreis (monatlich).
 * - Jährlich:  ZWEI Abos – Grundgebühr (jährlich) über Checkout,
 *              danach legt der Webhook ein zweites Abo nur mit dem
 *              Nutzungspreis (monatlich) an.
 */

export const PLANS = ["starter", "pro", "business"] as const;
export type Plan = (typeof PLANS)[number];

export const TAKTE = ["monat", "jahr"] as const;
export type Takt = (typeof TAKTE)[number];

export function isPlan(v: unknown): v is Plan {
  return typeof v === "string" && (PLANS as readonly string[]).includes(v);
}

export function isTakt(v: unknown): v is Takt {
  return typeof v === "string" && (TAKTE as readonly string[]).includes(v);
}

export function grundgebuehrKey(plan: Plan, takt: Takt): string {
  return `${plan}_${takt === "jahr" ? "jaehrlich" : "monatlich"}`;
}

export function nutzungKey(plan: Plan): string {
  return `${plan}_ls_nutzung`;
}

/** Metadaten-Schlüssel, die wir an Stripe-Objekte hängen. */
export const META = {
  plan: "braain_plan",
  takt: "braain_takt",
  rolle: "braain_rolle", // "grundgebuehr" | "komplett" | "nutzung"
  gruppe: "braain_gruppe", // verbindet die zwei Abos eines Jahreskunden
} as const;
