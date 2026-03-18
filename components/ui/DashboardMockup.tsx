import Image from "next/image";

export default function DashboardMockup() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Browser Chrome */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Browser Bar */}
        <div className="bg-gray-100/10 backdrop-blur-sm px-4 py-3 flex items-center gap-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/50 font-mono max-w-xs mx-auto text-center">
            app.braain.io
          </div>
        </div>

        {/* Dashboard Screenshot */}
        <div className="w-full bg-white">
          <Image
            src="/dashboard.png"
            alt="braain.io Dashboard"
            width={2914}
            height={1476}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, #994aff, transparent 70%)", transform: "translateY(20px)" }}
      />
    </div>
  );
}
