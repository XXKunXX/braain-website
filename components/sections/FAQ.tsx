"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Was ist braain und für wen ist es geeignet?",
    answer: "braain ist eine digitale All-in-One Plattform speziell für KMUs. Sie zentralisiert Baustellenmanagement, Disposition, Lieferscheine und Rechnungsstellung in einem System.",
  },
  {
    question: "Ist braain auch für kleine Betriebe geeignet?",
    answer: "Ja, braain ist skalierbar und passt sich Ihren Bedürfnissen an. Unser Starter-Plan ist speziell für kleinere Betriebe konzipiert und bietet alle wichtigen Grundfunktionen zu einem fairen Preis.",
  },
  {
    question: "Wie funktioniert die Mobile App auf der Baustelle?",
    answer: "Die braain Mobile App ist für iOS und Android verfügbar. Bauleiter können damit Lieferscheine erfassen, Fotos hochladen und digital signieren – auch bei schlechtem Netz werden Daten lokal gespeichert und synchronisiert.",
  },
  {
    question: "Wie sicher sind meine Daten bei braain?",
    answer: "Ihre Daten werden verschlüsselt auf Servern in der EU gespeichert. braain ist vollständig DSGVO-konform. Es werden tägliche Backups durchgeführt und der Datenzugriff ist jederzeit kontrollierbar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b7280" }}>
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Häufige Fragen
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Alles was Sie über braain wissen müssen – von Einrichtung bis Datenschutz.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border transition-all duration-300 overflow-hidden"
              style={
                openIndex === i
                  ? { borderColor: "#0a0a0a", background: "#f5f5f5" }
                  : { borderColor: "#f0f0f0", background: "#fafafa" }
              }
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span
                  className="font-semibold text-base"
                  style={{ color: openIndex === i ? "#0a0a0a" : "#111827" }}
                >
                  {faq.question}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={
                    openIndex === i
                      ? { background: "#0a0a0a", color: "#e6fd5a" }
                      : { background: "#e5e7eb", color: "#6b7280" }
                  }
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-300"
                    style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
