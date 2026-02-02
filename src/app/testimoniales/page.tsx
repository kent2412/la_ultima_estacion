"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BitacoraCarousel from "@/components/BitacoraCarousel";
import BitacoraInstructions from "@/components/BitacoraInstructions";
import ContactSection from "@/components/ContactSection";

export default function TestimonialesPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.bitacora.title} />
            {/* <BitacoraCarousel /> */}
            <BitacoraInstructions />
            <ContactSection />
        </main>
    );
}
