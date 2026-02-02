"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrailerSection from "@/components/TrailerSection";
import NextStopSection from "@/components/NextStopSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen font-sans text-white selection:bg-[#E8D860] selection:text-black">
      <Navbar />
      <Hero title={t.hero.title} variant="home" />
      <AboutSection />
      <TrailerSection />
      <NextStopSection />
      <ContactSection />
    </main>
  );
}
