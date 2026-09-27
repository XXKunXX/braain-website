# braain-website

Website braain.io mit Stripe-Abrechnung (Next.js 16, Vercel Frankfurt).

- `public/index.html` – die bestehende Website (eine Datei, Unterseiten über `#hash`).
  Einzige Ergänzung: die Knöpfe „Starter/Pro/Business wählen“ starten den Stripe Checkout.
- `app/api/checkout` – startet Stripe Checkout für ein Paket.
- `app/api/stripe/webhook` – empfängt Ereignisse von Stripe (Kauf, Kündigung, Zahlung).
- `lib/plans.ts` – Pakete und Stripe-`lookup_keys`.
- `lib/provisioning.ts` – signierte Aufrufe an die Kunden-Instanzen (Instanz-Pool, noch Platzhalter).

## Lokal starten

Voraussetzung: Node.js 22 oder neuer, Stripe CLI.

```bash
npm install
cp .env.example .env.local      # Sandbox-Schlüssel eintragen
npm run dev                     # http://localhost:3000
```

Webhooks lokal empfangen (zweites Terminal):

```bash
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
# ausgegebenes whsec_... in .env.local als STRIPE_WEBHOOK_SECRET eintragen, dev neu starten
```

Testkauf: auf `#preise` ein Paket wählen, Testkarte `4242 4242 4242 4242`, beliebiges Datum in der Zukunft, beliebige Prüfziffer.

## Stripe-Objekte (Sandbox „braain Sandbox“)

| lookup_key | Inhalt |
| --- | --- |
| `starter_monatlich` / `starter_jaehrlich` | 199 € / 1.990 € netto |
| `pro_monatlich` / `pro_jaehrlich` | 549 € / 5.490 € netto |
| `business_monatlich` / `business_jaehrlich` | 1.290 € / 12.900 € netto |
| `starter_ls_nutzung` | 300 LS inkl., danach 0,90 € (monatlich) |
| `pro_ls_nutzung` | 1.000 LS inkl., danach 0,70 € (monatlich) |
| `business_ls_nutzung` | 3.000 LS inkl., danach 0,50 € (monatlich) |

Zähler: Event-Name `lieferschein_signiert`, Aggregation Summe.

## Offen

- Instanz-Pool: Register, `assign`/`billing`/`status`/`release`/`restore` (Schnittstellenvertrag).
- Tägliches Auslesen von `status` und Meldung an den Stripe-Zähler.
- Datenbank für Register und verarbeitete Ereignisse.
- Live-Schaltung: UID der FlexCo, Steuerregistrierung AT, Katalog im Live-Konto, DNS auf Vercel.
