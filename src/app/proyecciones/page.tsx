"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScreeningsList from "@/components/ScreeningsList";
import PastScreenings from "@/components/PastScreenings";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import ContactInfoSection from "@/components/ContactInfoSection"; // Reusing contact section
import { AnthologySection } from "@/components/AnthologySection"; // Reusing support section visual style if needed, or just keep footer

export default function ProyeccionesPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#C8D15D] selection:text-black">
            <Navbar />
            <Hero title={t.pages.screenings.title} />
            {/* 
            <ScreeningsList />
            <PastScreenings />
            <AwardsSection />
            <div className="bg-transparent">
                <ContactInfoSection />
            </div>
            
            */}

            {/* Announcement Section */}
            <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8 border-b border-white/10">
                <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                    {t.pages.screenings.announcement.text1}
                </p>
                <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                    {t.pages.screenings.announcement.text2}
                </p>
                <p className="text-xl md:text-2xl text-[#E8D860] font-medium leading-relaxed pt-4">
                    {t.pages.screenings.announcement.follow}
                </p>
            </section>

            {/* Private Screening Request Section */}
            <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860]">
                        {t.pages.screenings.privateScreening.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                        {t.pages.screenings.privateScreening.description}
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-left space-y-8 backdrop-blur-sm">
                    <div className="space-y-4">
                        <p className="text-lg text-white/80">
                            {t.pages.screenings.privateScreening.emailPrompt}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70 list-disc list-inside ml-4">
                            {t.pages.screenings.privateScreening.fields.map((field, index) => (
                                <li key={index} className="text-base text-[#E8D860]">
                                    <span className="text-white/90">{field}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 text-center">
                        <a
                            href={`mailto:${t.pages.screenings.privateScreening.email}`}
                            className="inline-block bg-[#E8D860] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-colors duration-300 uppercase tracking-wider text-sm md:text-base"
                        >
                            {t.pages.screenings.privateScreening.email}
                        </a>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}
