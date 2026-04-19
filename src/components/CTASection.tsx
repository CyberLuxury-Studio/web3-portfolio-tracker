"use client";

import React from "react";

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          Ready to Initialize?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join the network today. Deploy your first autonomous system in seconds and embrace the future.
        </p>
        <button className="px-10 py-5 bg-cyan-500 text-black font-bold text-xl uppercase shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] hover:scale-105 transition-all duration-300">
          Start Deployment
        </button>
      </div>
    </section>
  );
}
