"use client";

import { FiChevronDown, FiUser } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Kindsight
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
          >
            Who we Serve
            <FiChevronDown className="w-4 h-4 text-gray-400" />
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 transition-colors"
          >
            Product
            <span className="bg-orange-100/90 text-orange-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-orange-200/60">
              New
            </span>
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Company
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
          >
            Resources
            <FiChevronDown className="w-4 h-4 text-gray-400" />
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all cursor-pointer active:scale-95">
            Get a Demo
          </button>
          <button
            aria-label="User Account"
            className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-pointer"
          >
            <FiUser className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

