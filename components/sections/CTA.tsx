"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  return (
    <section
      id="cta"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#e6fd5a" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30" style={{ background: "#fff", filter: "blur(100px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-20" style={{ background: "#fff", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-600">
              Jetzt starten
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Eine Plattform. Jede Baustelle.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Bereit Ihren Betrieb zu digitalisieren? Starten Sie Ihre braain Reise jetzt. Zeit smarter zu arbeiten, nicht härter.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Kostenlose Demo ohne Verpflichtung",
                "Persönliche Einführung durch unser Team",
                "Anpassung auf Ihre Prozesse",
                "DSGVO-konform",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-black/10">
                    <svg className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "#e6fd5a" }}
                >
                  <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Vielen Dank!</h3>
                <p className="text-gray-500 text-sm">
                  Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Demo anfragen</h3>
                <p className="text-gray-400 text-sm mb-7">Kostenlos und unverbindlich</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ihr Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Max Mustermann"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none transition-all"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(10,10,10,0.1)")}
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Unternehmen</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Mustermann Erdbau AG"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none transition-all"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(10,10,10,0.1)")}
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-Mail</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="max@mustermann-erdbau.com"
                      required
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 text-sm focus:outline-none transition-all"
                      onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(10,10,10,0.1)")}
                      onBlur={(e) => (e.target.style.boxShadow = "none")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-bold py-4 rounded-full text-sm shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all mt-2"
                    style={{ background: "#0a0a0a", color: "#fff" }}
                  >
                    Demo anfragen
                  </button>
                  {error && (
                    <p className="text-xs text-red-500 text-center font-medium">
                      Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.
                    </p>
                  )}
                  <p className="text-xs text-gray-400 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="#" className="hover:underline text-gray-600">Datenschutzerklärung</a> zu.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
