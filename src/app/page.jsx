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
      <Hero />
      <Dashboard />
      <LogoPartners />
      <BuiltOnCare />
    </main>
  );
}

