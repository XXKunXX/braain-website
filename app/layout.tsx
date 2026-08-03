import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "braain – Digitale Plattform für Erdbau- und Tiefbauunternehmen",
  description:
    "Von Auftrag bis Rechnung – verwalten Sie Baustellen, Maschinen, Disposition, Rapporte und Rechnungen zentral in einer modernen Plattform.",
  keywords: [
    "Erdbau", "Tiefbau", "Baustellenmanagement", "Disposition",
    "Rapporte", "Rechnungsstellung", "Software", "Digitalisierung",
  ],
  openGraph: {
    title: "braain – Digitale Plattform für Erdbau & Tiefbau",
    description:
      "Plane Baustellen, disponiere Maschinen und Personal, erfasse Rapporte und erstelle Rechnungen – alles in einer zentralen Plattform.",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`scroll-smooth ${dmSans.variable}`}>
      <body className="bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  );
}
