const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Ideal für kleine Erdbauunternehmen, die den Einstieg in die Digitalisierung wagen.",
    cta: "Demo anfragen",
    highlighted: false,
    features: [
      "Kunden & Kontakte verwalten",
      "Anfragen erfassen & nachverfolgen",
      "Angebote schnell erstellen",
      "Rechnungen direkt generieren",
      "Alles an einem Ort – kein Excel",
      "Zugriff von überall",
    ],
  },
  {
    name: "Professional",
    price: 89,
    description: "Für wachsende Betriebe mit mehreren Baustellen und Teams.",
    cta: "Demo anfragen",
    highlighted: true,
    features: [
      "Alles aus Starter",
      "Baustellen verwalten",
      "Disposition & Kalender",
      "Mitarbeiter & Zeiten im Überblick",
      "Digitale Lieferscheine",
      "Mobile App",
    ],
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Für große Unternehmen mit individuellen Anforderungen.",
    cta: "Demo anfragen",
    highlighted: false,
    features: [
      "Alles aus Professional",
      "Lager & Materialverwaltung",
      "Individuelle Anpassungen & Workflows",
      "Schnittstellen & Integrationen",
      "Persönlicher Ansprechpartner",
      "SLA & priorisierter Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b7280" }}>
            Preise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Ihr Plan. Ihre Entscheidung.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Transparente Preise ohne versteckte Kosten – für jeden Betrieb der passende Plan.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={
                plan.highlighted
                  ? { background: "#0a0a0a", boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }
                  : { background: "#fafafa", border: "1px solid #f0f0f0" }
              }
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full shadow" style={{ background: "#e6fd5a", color: "#0a0a0a" }}>
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: plan.highlighted ? "#fff" : "#111827" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.6)" : "#6b7280" }}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: plan.highlighted ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>
                  ab
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className="text-5xl font-black"
                    style={{ color: plan.highlighted ? "#fff" : "#111827" }}
                  >
                    € {plan.price}
                  </span>
                </div>
                <p className="text-sm mt-1" style={{ color: plan.highlighted ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>
                  pro Nutzer / Monat
                </p>
              </div>

              <a
                href="#cta"
                className="block text-center font-bold text-sm py-3.5 rounded-full mb-6 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={
                  plan.highlighted
                    ? { background: "#e6fd5a", color: "#0a0a0a" }
                    : { background: "#0a0a0a", color: "#fff" }
                }
              >
                {plan.cta}
              </a>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: plan.highlighted ? "#e6fd5a" : "#0a0a0a" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.8)" : "#374151" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
