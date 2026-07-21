"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import LogoPartners from "@/components/LogoPartners";
import BuiltOnCare from "@/components/BuiltOnCare";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Shared Gradient Background Wrapper for Hero + Dashboard */}
      <div className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-orange-100/80 via-orange-50/40 to-white">
        {/* Ambient warm orange glows matching reference design */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-orange-200/50 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute top-36 -left-28 w-96 h-[700px] bg-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-36 -right-28 w-96 h-[700px] bg-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <Hero />
        <Dashboard />
      </div>

      <LogoPartners />
      <BuiltOnCare />
    </main>
  );
}


