"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CastGrid from "@/components/CastGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function ElencoPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.cast.title} />
            <CastGrid />
            {/* <TestimonialsSection /> */}
            <ContactSection />
        </main>
    );
}
