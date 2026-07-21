"use client";

import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-orange-100 via-orange-50/30 to-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/40 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Loved by Pill Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur border border-orange-100/80 shadow-xs rounded-full px-4 py-1.5 text-xs text-gray-600 mb-8 font-medium hover:border-orange-200 transition-colors">
          <div className="flex -space-x-1.5 overflow-hidden">
            <img
              className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="User Avatar"
            />
            <img
              className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="User Avatar"
            />
            <img
              className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="User Avatar"
            />
          </div>
          <span>
            Loved By Over <strong className="font-semibold text-gray-900">1 Million Users</strong>
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12] mb-6">
          Fundraising Intelligence <br />
          That{" "}
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Unlocks Opportunities
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
          Forget stale spreadsheets and ancient tools. With Kindsight, you get real-time
          insights that help you find major supporters.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3.5">
          <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer active:scale-95 group">
            <span>Request a Demo</span>
            <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium text-sm transition-all cursor-pointer shadow-2xs hover:border-gray-300 active:scale-95">
            Watch Overview
          </button>
        </div>
      </div>
    </section>
  );
}

