import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#f5f5f5", borderTop: "1px solid #e5e7eb" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#0a0a0a" }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-lg">
                braain.io
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Die digitale Plattform für Erdbau- und Tiefbauunternehmen.
            </p>
            <p className="text-gray-400 text-xs">Entwickelt in Österreich 🇦🇹</p>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
          style={{ background: "#fff", border: "1px solid #e5e7eb" }}
        >
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-1">Newsletter abonnieren</h3>
            <p className="text-gray-500 text-sm">Verpassen Sie keine Updates – jetzt anmelden.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="ihre@email.com"
              className="flex-1 md:w-64 px-4 py-3 rounded-full text-sm text-gray-900 bg-gray-50 border border-gray-200 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              className="px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap hover:opacity-90 transition-all"
              style={{ background: "#e6fd5a", color: "#0a0a0a" }}
            >
              Anmelden
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} braain.io. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-xs transition-colors">AGB</Link>
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-xs transition-colors">Datenschutz</Link>
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-xs transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
