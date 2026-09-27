import Stripe from "stripe";

let client: Stripe | null = null;

/**
 * Stripe-Client, nur auf dem Server verwenden.
 * Der Schlüssel kommt aus STRIPE_SECRET_KEY (lokal: .env.local, Vercel: Umgebungsvariable).
 */
export function stripe(): Stripe {
  if (client) return client;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY fehlt (siehe .env.example).");
  }
  client = new Stripe(key, {
    appInfo: { name: "braain-website", version: "0.1.0" },
  });
  return client;
}

export function siteUrl(): string {
  return (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
}
