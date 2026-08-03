const pillars = [
  { label: "Büro", icon: "🏢", desc: "Aufträge, Projekte und Dokumente zentral verwalten" },
  { label: "Baustelle", icon: "🏗️", desc: "Rapporte, Fotos und Leistungen mobil erfassen" },
  { label: "Maschinen", icon: "⚙️", desc: "Verfügbarkeit, Service und Einsätze im Blick" },
  { label: "Mitarbeiter", icon: "👷", desc: "Zeiten, Einsätze und Qualifikationen verwalten" },
  { label: "Abrechnung", icon: "🧾", desc: "Automatisch aus Rapportdaten Rechnungen erstellen" },
];

export default function Solution() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#6b7280" }}>Die Lösung</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Alles in einem System
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed mb-8">
              braain verbindet alle Bereiche Ihres Unternehmens in einer einzigen Plattform. Keine Insellösungen, keine Doppelarbeit – ein durchgängiger digitaler Prozess.
            </p>
            <div className="space-y-3">
              {[
                "Echtzeitkommunikation zwischen Büro und Baustelle",
                "Automatischer Datenfluss von Rapport zu Rechnung",
                "Mobile App für Poliere und Bauführer",
                "DSGVO-konform & Hosting in der EU",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#f0f0f0" }}>
                    <svg className="w-3 h-3" style={{ color: "#0a0a0a" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <div className="flex flex-col items-center gap-4">
              {/* Center hub */}
              <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-lg" style={{ background: "#0a0a0a" }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
                <span className="text-xs font-bold mt-1" style={{ color: "#e6fd5a" }}>braain</span>
              </div>

              <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#d1d5db" }} />
                ))}
              </div>

              {/* Pillars grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 w-full">
                {pillars.map((p) => (
                  <div key={p.label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{p.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
