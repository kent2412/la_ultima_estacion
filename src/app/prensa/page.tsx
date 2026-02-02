"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactInfoSection from "@/components/ContactInfoSection";
import EPKSection from "@/components/EPKSection";
import PressGrid from "@/components/PressGrid";
import ContactSection from "@/components/ContactSection";

export default function PrensaPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.press.title} />
            {/* Contact Information */}
            <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider text-center">
                    {t.pages.press.contactInfoTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/90">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#E8D860]">{t.pages.press.pressMediaLabel}</h3>
                        <a href={`mailto:${t.pages.press.email}`} className="block text-lg hover:text-[#E8D860] transition-colors">{t.pages.press.email}</a>

                        <h3 className="text-xl font-bold text-[#E8D860] pt-4">{t.pages.press.phoneLabel}</h3>
                        <p className="text-lg">{t.pages.press.phone}</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#E8D860]">{t.pages.press.producerLabel}</h3>
                        <p className="text-lg font-medium">{t.pages.press.producerName}</p>
                        <a href={`mailto:${t.pages.press.producerEmail}`} className="block text-lg hover:text-[#E8D860] transition-colors">{t.pages.press.producerEmail}</a>
                    </div>
                </div>
            </section>

            {/* EPK Section */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-12 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider">
                            {t.pages.press.dossierTitle}
                        </h2>
                        <p className="text-xl text-[#E8D860]/80 font-medium uppercase tracking-widest">
                            {t.pages.press.epkAvailable}
                        </p>
                    </div>

                    <div className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto space-y-8">
                        <p className="whitespace-pre-line">{t.pages.press.dossierText}</p>

                        <ul className="text-left bg-black/20 p-8 rounded-xl space-y-3 border border-white/5 inline-block w-full max-w-2xl">
                            {t.pages.press.epkIncludes.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-[#E8D860] mt-1.5 text-xs">●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
                        <button disabled className="py-4 px-6 border border-white/20 rounded-lg text-white/50 cursor-not-allowed hover:bg-white/5 transition-colors uppercase font-bold text-sm tracking-wider">
                            {t.pages.press.buttons.pdf}
                        </button>
                        <button disabled className="py-4 px-6 border border-white/20 rounded-lg text-white/50 cursor-not-allowed hover:bg-white/5 transition-colors uppercase font-bold text-sm tracking-wider">
                            {t.pages.press.buttons.flyer}
                        </button>
                        <button disabled className="py-4 px-6 border border-white/20 rounded-lg text-white/50 cursor-not-allowed hover:bg-white/5 transition-colors uppercase font-bold text-sm tracking-wider">
                            {t.pages.press.buttons.poster}
                        </button>
                    </div>
                </div>
            </section>

            {/* Notes Section */}
            <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider">
                    {t.pages.press.notesTitle}
                </h2>
                <div className="p-12 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <p className="text-xl text-white/60 italic">
                        {t.pages.press.notesText}
                    </p>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
