const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "KI-gestützte Automatisierung",
    description: "Intelligente Prozesse sparen täglich Stunden an Administration. Lieferscheine werden automatisch zu Rechnungen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Blitzschnelle Performance",
    description: "Optimiert für mobile Nutzung auf der Baustelle – auch bei schwacher Verbindung zuverlässig.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile & Desktop",
    description: "Auf jedem Gerät optimal nutzbar – Büro am Desktop, Bauleiter per Smartphone oder Tablet.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "DSGVO-konform",
    description: "Hosting in Europa, verschlüsselte Datenübertragung – Ihre Daten bleiben sicher und compliant.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Echtzeit-Kollaboration",
    description: "Büro, Bauleiter und Poliere arbeiten in Echtzeit zusammen – alle immer auf dem gleichen Stand.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#6b7280" }}>
              Warum braain?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Führend durch Innovation, gewählt von vielen
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Wir liefern eine vollständige Lösung für KMUs – modernste Technologie kombiniert mit tiefem Branchenwissen.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "−40%", label: "Admin-Aufwand" },
                { value: "99%", label: "Kundenzufriedenheit" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: benefit list */}
          <div className="space-y-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-md transition-all duration-300 bg-white group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: "#f0f0f0", color: "#0a0a0a" }}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
