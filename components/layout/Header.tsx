"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#features", label: "Funktionen" },
  { href: "#pricing", label: "Preise" },
  { href: "#testimonials", label: "Referenzen" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-white/80 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#0a0a0a" }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              braain<span style={{ color: "#0a0a0a" }}>.io</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#cta"
              className="text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-sm border border-gray-200"
              style={{ background: "#e6fd5a", color: "#0a0a0a" }}
            >
              Demo anfragen
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 bg-white rounded-2xl shadow-xl mb-4 border border-gray-100 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#cta"
                className="block w-full text-center text-sm font-semibold px-4 py-3 rounded-full"
                style={{ background: "#e6fd5a", color: "#0a0a0a" }}
              >
                Demo anfragen
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
