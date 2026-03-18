const tabs = ["CRM", "Baustellenmanagement", "Finanz (geplant)", "Lager (geplant)"];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Baustellenmanagement",
    description: "Verwalte alle Baustellen und Projekte zentral. Vollständige Übersicht über Status, Fortschritt, Team und Ressourcen in Echtzeit.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Team & Personal",
    description: "Koordiniere Mitarbeiter, Poliere und Bauführer. Digitale Stundennachweise und Qualifikationsverwaltung inklusive.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Sicher & Zuverlässig",
    description: "Gehostet in Europa, entwickelt in Österreich. DSGVO-konform, verschlüsselt und mit täglichen Backups.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Disposition & Planung",
    description: "Drag & Drop Kalender für Maschinen, LKW und Personal. Konfliktwarnung und Auslastungsanalyse in Echtzeit.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Echtzeit-Benachrichtigungen",
    description: "Bleib immer informiert – neue Lieferscheine, Statusänderungen und wichtige Ereignisse direkt auf deinem Gerät.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: "Berichte & Abrechnung",
    description: "Erfasse Leistungen direkt auf der Baustelle und erstelle Rechnungen ohne doppelte Eingaben. Weniger Fehler, schnellere Abrechnung.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#e6fd5a", WebkitTextStroke: "0.5px #b8cc2a" }}>
            Kern-Funktionen
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Produktivität steigern mit leistungsstarken Funktionen
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vier Module, nahtlos verbunden – für den gesamten Ablauf von Anfrage bis Rechnung.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className="px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all"
              style={
                i === 0
                  ? { background: "#0a0a0a", color: "#fff" }
                  : { background: "#f5f5f5", color: "#0a0a0a" }
              }
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={i === 0 ? { background: "#0a0a0a" } : { background: "#fafafa" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={
                  i === 0
                    ? { background: "rgba(230,253,90,0.15)", color: "#e6fd5a" }
                    : { background: "#f0f0f0", color: "#0a0a0a" }
                }
              >
                {f.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={i === 0 ? { color: "#fff" } : { color: "#111827" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={i === 0 ? { color: "rgba(255,255,255,0.6)" } : { color: "#6b7280" }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all text-sm"
            style={{ background: "#0a0a0a", color: "#fff" }}
          >
            Jetzt loslegen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
