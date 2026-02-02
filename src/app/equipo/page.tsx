"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CrewGrid from "@/components/CrewGrid";
import ContactSection from "@/components/ContactSection";

export default function EquipoPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.crew.title} />
            <CrewGrid />
            <ContactSection />
        </main>
    );
}
