"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContestForm from "@/components/ContestForm";
import JurySection from "@/components/JurySection";
import FinalistsSection from "@/components/FinalistsSection";
import { AnthologySection, EventSection } from "@/components/AnthologySection";
import ContactSection from "@/components/ContactSection";

export default function ConcursoPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.contest.title} />
            <ContestForm />

            <div className="space-y-0">
                <JurySection />
                <FinalistsSection />
            </div>

            <AnthologySection />
            {/* <EventSection /> */}

            <ContactSection />
        </main>
    );
}
