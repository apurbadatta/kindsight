"use client";

import { 
  FiChevronDown, 
  FiBarChart2, 
  FiSettings, 
  FiBell, 
  FiShare2, 
  FiCalendar, 
  FiTrendingUp, 
  FiEdit3, 
  FiExternalLink,
  FiGrid,
  FiFolder,
  FiClock
} from "react-icons/fi";
import { HiSparkles, HiMiniSparkles } from "react-icons/hi2";

export default function Dashboard() {
  return (
    <section className="pb-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Floating Dashboard Card Container */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-all">
          
          {/* 1. App Top Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            {/* Left: Brand & Navigation */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center text-white shadow-xs">
                  <HiSparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-bold text-gray-900 text-sm tracking-tight">
                  Kindsight
                </span>
              </div>

              {/* Active Tab */}
              <div className="flex items-center gap-2 ml-2">
                <button className="bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Dashboard
                </button>

                {/* App Tools Icons */}
                <div className="hidden sm:flex items-center gap-1 text-gray-400 pl-2">
                  <button aria-label="Grid view" className="p-1.5 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                    <FiGrid className="w-3.5 h-3.5" />
                  </button>
                  <button aria-label="Folder" className="p-1.5 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                    <FiFolder className="w-3.5 h-3.5" />
                  </button>
                  <button aria-label="Analytics" className="p-1.5 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                    <FiBarChart2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Quick actions & User profile */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1 text-gray-400">
                <button aria-label="Notifications" className="p-1.5 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                  <FiBell className="w-4 h-4" />
                </button>
                <button aria-label="Settings" className="p-1.5 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                  <FiSettings className="w-4 h-4" />
                </button>
              </div>

              {/* User Avatar */}
              <div className="flex items-center gap-2.5 pl-3 border-l border-gray-200">
                <img
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-orange-200"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                  alt="Rafatar Albert"
                />
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-semibold text-gray-900 leading-tight">Rafatar Albert</p>
                  <p className="text-[10px] text-gray-400 leading-tight">rafara66@gmail...</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Inner Dashboard Canvas Body */}
          <div className="p-5 sm:p-6 bg-gray-50/30">
            
            {/* Title Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                  Fundraising Dashboard
                </h2>
                <button aria-label="Edit title" className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                  <FiEdit3 className="w-4 h-4" />
                </button>
              </div>

              {/* Date & Actions Bar */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 shadow-2xs font-medium">
                  <FiCalendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>14 November</span>
                  <span className="font-semibold text-gray-900">2026</span>
                </div>

                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 shadow-2xs">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <img className="w-4 h-4 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-4 h-4 rounded-full ring-1 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                  </div>
                  <button className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                    <FiShare2 className="w-3.5 h-3.5" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Main Columns Dashboard Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              
              {/* Card 1: TOTAL RAISED */}
              <div className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                        <FiTrendingUp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Total Raised
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md transition-colors">
                        This Week
                        <FiChevronDown className="w-3 h-3 text-gray-400" />
                      </button>
                      <button aria-label="Expand" className="text-gray-400 hover:text-gray-600 p-1">
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Main Metric */}
                  <div className="flex items-baseline gap-1 mt-1 mb-2">
                    <span className="text-3xl font-black text-gray-900 tracking-tight">
                      $18,425
                    </span>
                    <span className="text-base font-bold text-gray-400">.98</span>
                  </div>

                  {/* Growth Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      +12.4%
                    </span>
                    <span className="text-xs font-medium text-emerald-600">
                      Good progress!
                    </span>
                  </div>
                </div>

                {/* SVG Spline Area Chart */}
                <div className="relative pt-2">
                  <div className="relative h-32 w-full">
                    {/* Tooltip Hover Marker */}
                    <div className="absolute left-[54%] top-1 -translate-x-1/2 z-10 bg-gray-900 text-white text-[10px] rounded px-2 py-1 shadow-md flex flex-col items-center pointer-events-none">
                      <span className="text-[9px] text-gray-400 font-medium">10 NOVEMBER</span>
                      <span className="font-bold text-white">Total $2,425.87</span>
                      <div className="w-2 h-2 bg-gray-900 rotate-45 -mb-2 mt-[1px]" />
                    </div>

                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#F97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path
                        d="M 0,80 Q 50,65 100,75 T 200,30 T 300,45 L 300,100 L 0,100 Z"
                        fill="url(#orangeGradient)"
                      />

                      {/* Stroke Line */}
                      <path
                        d="M 0,80 Q 50,65 100,75 T 200,30 T 300,45"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Vertical Indicator Line */}
                      <line
                        x1="165"
                        y1="20"
                        x2="165"
                        y2="100"
                        stroke="#F97316"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />

                      {/* Active Point Circle */}
                      <circle cx="165" cy="32" r="5" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* X-Axis Day Labels */}
                  <div className="flex justify-between items-center text-[10px] font-semibold text-gray-400 pt-2 border-t border-gray-100">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>
                </div>
              </div>

              {/* Card 2: MAJOR GIFT */}
              <div className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Major Gift
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        Identified
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Qualified
                      </span>
                      <span className="flex items-center gap-1 text-gray-900 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        Active Ask
                      </span>
                    </div>
                  </div>

                  {/* Radial Gauge Arc Display */}
                  <div className="flex flex-col items-center justify-center my-4 relative">
                    <div className="relative w-44 h-32 flex items-center justify-center">
                      <svg className="w-44 h-44 -rotate-90 overflow-visible" viewBox="0 0 100 100">
                        {/* Background Track */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#FFEAD6"
                          strokeWidth="9"
                          strokeDasharray="188 63"
                          strokeLinecap="round"
                        />
                        {/* Active Gauge Fill */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="9"
                          strokeDasharray="140 111"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Center Value */}
                      <div className="absolute top-12 flex flex-col items-center">
                        <span className="text-4xl font-black text-gray-900 tracking-tight">
                          162
                        </span>
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                          Total
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Forecasted & Pending Stats */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 text-center">
                  <div className="bg-gray-50/70 p-2.5 rounded-lg border border-gray-100">
                    <p className="text-[11px] text-gray-500 font-medium">Forecasted</p>
                    <p className="text-base font-extrabold text-gray-900 mt-0.5">$1,24M</p>
                  </div>
                  <div className="bg-gray-50/70 p-2.5 rounded-lg border border-gray-100">
                    <p className="text-[11px] text-gray-500 font-medium">Pending ask</p>
                    <p className="text-base font-extrabold text-gray-900 mt-0.5">$750K</p>
                  </div>
                </div>
              </div>

              {/* Card 3: AI INSIGHT */}
              <div className="bg-gradient-to-b from-orange-50/60 via-white to-white rounded-xl p-5 border border-orange-200/70 shadow-2xs flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-xs">
                        <HiMiniSparkles className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        AI Insight
                      </span>
                    </div>

                    <button className="bg-white hover:bg-gray-50 border border-orange-200/80 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer">
                      <HiSparkles className="w-3.5 h-3.5 text-orange-500" />
                      Generate
                    </button>
                  </div>

                  {/* Main Metric with Stacked Donors */}
                  <div className="flex items-center justify-between my-3">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-4xl font-black text-gray-900 tracking-tight">
                        29
                      </span>
                      <span className="text-2xl font-extrabold text-orange-500">+</span>
                    </div>

                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Donor" />
                      <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Donor" />
                      <img className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Donor" />
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="flex items-start gap-1.5 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-xs font-medium text-gray-700 leading-snug">
                      High-potential donors identified this week
                    </p>
                  </div>

                  {/* Explanatory text card */}
                  <div className="bg-white/80 border border-orange-100 p-3 rounded-lg text-xs text-gray-600 leading-relaxed shadow-2xs">
                    Our intelligence engine continuously analyzes donation history and{" "}
                    <strong className="font-semibold text-gray-900">
                      identifies donors who are most likely to make larger donations.
                    </strong>
                  </div>
                </div>

                {/* Footer Timestamp */}
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium pt-3 mt-3 border-t border-gray-100">
                  <FiClock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Updated 2 Hours Ago</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

