"use client";

import { useState } from "react";
import Image from "next/image";

const YOUTUBE_ID = "SqPzTlBohiA";

export default function DashboardMockup() {
  const [playing, setPlaying] = useState(false);

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

        {/* Product Video */}
        <div className="relative w-full aspect-video bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="braain Produktvideo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full"
              aria-label="Produktvideo abspielen"
            >
              <Image
                src="/video-thumbnail.jpg"
                alt="braain Produktvideo"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: "#e6fd5a" }}
                >
                  <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="#0a0a0a">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
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
