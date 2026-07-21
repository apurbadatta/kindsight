"use client";

import { HiSparkles } from "react-icons/hi2";
import { FiStar, FiAward } from "react-icons/fi";

export default function BuiltOnCare() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] max-w-xl">
            Built On Care, Community, And Commitment To Your Mission
          </h2>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 pb-1">
            The Kindsight Difference
          </span>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Community */}
          <div className="bg-gradient-to-br from-orange-50/80 via-orange-50/30 to-white rounded-2xl p-8 border border-orange-100/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-200/60 flex items-center justify-center text-orange-600 shadow-xs">
                  <HiSparkles className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  A community built for practitioners
                </h3>
              </div>

              <p className="text-base text-gray-600 leading-relaxed font-normal">
                With Kindsight, you&apos;re never fundraising alone. When you join Kindsight, you join a thriving community of professionals who understand your challenges and share your mission.
              </p>
            </div>

            {/* Subtle decorative bottom element */}
            <div className="mt-8 pt-4 border-t border-orange-100/60 flex items-center gap-2 text-xs font-semibold text-orange-600">
              <span>Explore Community Hub</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2: Insight Widget Preview */}
          <div className="bg-gradient-to-br from-orange-50/40 via-white to-gray-50/50 rounded-2xl p-8 border border-gray-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              {/* Card Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Insight
                </span>
              </div>

              {/* Styled Mock Widget Box */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-2xs">
                <div className="grid grid-cols-2 gap-4 divide-x divide-gray-100 text-center">
                  <div className="px-2">
                    <div className="flex items-center justify-center gap-1.5 text-gray-400 mb-1">
                      <FiStar className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs font-medium text-gray-500">Hidden Gems</span>
                    </div>
                    <p className="text-3xl font-black text-gray-900 tracking-tight">12</p>
                  </div>

                  <div className="px-2">
                    <div className="flex items-center justify-center gap-1.5 text-gray-400 mb-1">
                      <FiAward className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-medium text-gray-500">Distinguished</span>
                    </div>
                    <p className="text-3xl font-black text-gray-900 tracking-tight">19</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs font-medium text-gray-400 mt-6">
              AI-driven donor discovery & segmentation
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

