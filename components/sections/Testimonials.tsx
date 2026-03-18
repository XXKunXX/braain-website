export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32" style={{ background: "#f5f5f5" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b7280" }}>
            Kundenstimme
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Single featured testimonial */}
        <div className="bg-white rounded-3xl p-12 lg:p-16 text-center shadow-sm border border-gray-100">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium mb-10">
            „Von der Anfrage bis zur Rechnung läuft bei uns jetzt alles digital. Das hat unsere Verwaltung komplett verändert: weniger Papierkram, weniger Fehler, mehr Zeit fürs Wesentliche."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
              style={{ background: "#0a0a0a" }}
            >
              MB
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Maximilian B.</p>
              <p className="text-gray-400 text-sm">Geschäftsführer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
