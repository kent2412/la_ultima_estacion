"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HistorySection from "@/components/HistorySection";
import HistoryGallery from "@/components/HistoryGallery";
import HistoryBloopers from "@/components/HistoryBloopers";
import ContactSection from "@/components/ContactSection";


export default function HistoryPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.history.title} />
            <div className="relative z-10"> {/* Ensure content stacks on top of hero gradient if needed */}
                <HistorySection />
                <HistoryGallery />
                {/* <HistoryBloopers /> */}
            </div>
            <ContactSection />
        </main>
    );
}
