const steps = [
  {
    number: "01",
    title: "Anfrage anlegen",
    description: "Kundenanfragen direkt in braain.io erfassen und verwalten. Alle Informationen zentral gespeichert – kein Zettelchaos, kein vergessener Kontakt.",
  },
  {
    number: "02",
    title: "Angebot erstellen",
    description: "Professionelle Angebote in wenigen Klicks erstellen und direkt versenden. Positionen, Einheiten und Preise einfach zusammenstellen.",
  },
  {
    number: "03",
    title: "Auftrag & Baustelle erfassen",
    description: "Neuer Auftrag wird direkt in braain.io erfasst. Baustelle anlegen, Pläne hochladen und alle Details zentral hinterlegen – in Sekunden startklar.",
  },
  {
    number: "04",
    title: "Disponieren & Planen",
    description: "Maschinen, LKW und Personal per Drag & Drop einplanen. Konflikte werden automatisch erkannt und Auslastung optimiert.",
  },
  {
    number: "05",
    title: "Berichte & Leistungen erfassen",
    description: "Bauleiter erfassen Leistungen direkt per Mobile App auf der Baustelle. Digitale Signatur, Fotos und Materialerfassung inklusive.",
  },
  {
    number: "06",
    title: "Automatisch abrechnen",
    description: "Aus den Rapportdaten wird automatisch eine Rechnung generiert. Direkt versenden – kein manueller Aufwand, kein Papierkram.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 lg:py-32" style={{ background: "#f5f5f5" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b7280" }}>
            So funktioniert es
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Schritt für Schritt zum digitalen Prozess
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            braain.io digitalisiert Ihren gesamten Ablauf – von der Anfrage bis zur automatischen Rechnungsstellung.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-black"
                  style={
                    i === 0
                      ? { background: "#0a0a0a", color: "#e6fd5a" }
                      : { background: "#f0f0f0", color: "#0a0a0a" }
                  }
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-14 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 text-white"
          style={{ background: "#0a0a0a" }}
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold mb-3">
              Bereit für digitale Workflows?
            </h3>
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Starten Sie heute und erleben Sie wie einfach Ihr gesamter Prozess sein kann.
            </p>
          </div>
          <a
            href="#cta"
            className="flex-shrink-0 inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-sm hover:-translate-y-0.5 transition-all shadow-xl whitespace-nowrap"
            style={{ background: "#e6fd5a", color: "#0a0a0a" }}
          >
            Demo anfragen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
