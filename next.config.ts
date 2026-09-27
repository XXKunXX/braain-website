import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Die bestehende Website ist eine einzelne HTML-Datei in /public.
  // Die Startseite "/" zeigt direkt auf diese Datei; alle Unterseiten
  // laufen darin über #hash-Routen (z. B. #preise, #produkt/crm).
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
