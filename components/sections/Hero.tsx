import Link from "next/link";
import DashboardMockup from "@/components/ui/DashboardMockup";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-20"
      style={{ background: "#f8f9fa" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-60 w-[600px] h-[600px] rounded-full opacity-40" style={{ background: "#e6fd5a", filter: "blur(120px)" }} />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full opacity-20" style={{ background: "#e6fd5a", filter: "blur(100px)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-0">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-xs font-semibold px-5 py-2 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#0a0a0a" }} />
            Speziell für KMUs im Baubereich
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Eine Plattform.
            <br />
            <span
              className="relative inline-block px-4 py-1 rounded-2xl"
              style={{ background: "#e6fd5a", color: "#0a0a0a" }}
            >
              Jede Baustelle.
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-lg sm:text-xl font-semibold text-gray-700">
            All-in-One Plattform für KMUs
          </p>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-base text-gray-500 leading-relaxed">
            Excel, WhatsApp und Papier? Zeit für eine Lösung, die alles verbindet. Verwalte Baustellen, Maschinen und Mitarbeiter zentral.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#cta"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-sm shadow-lg hover:-translate-y-0.5 transition-all"
            style={{ background: "#0a0a0a", color: "#fff" }}
          >
            👉 Jetzt Demo anfragen
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-sm hover:bg-gray-50 transition-all shadow-sm"
          >
            👉 Mehr erfahren
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16">
          {[
            "Keine versteckten Kosten",
            "Schnelle Einrichtung",
            "Entwickelt in Österreich",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
