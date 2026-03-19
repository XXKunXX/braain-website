import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#f5f5f5", borderTop: "1px solid #e5e7eb" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} braain.io. Alle Rechte vorbehalten. · Entwickelt in Österreich 🇦🇹</p>
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
