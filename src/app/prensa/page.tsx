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
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#E8D860] pt-4">{t.pages.press.phoneLabel}</h3>
                        <p className="text-lg">{t.pages.press.phone}</p>
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

                    {/* Google Drive Button – disabled until May 2026 */}
                    <div className="pt-8">
                        <button
                            disabled
                            className="inline-flex items-center gap-3 py-4 px-8 rounded-xl font-bold text-sm tracking-wider uppercase border border-white/20 text-white/50 cursor-not-allowed opacity-60"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-5 h-5 flex-shrink-0 opacity-50" aria-hidden="true">
                                <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
                                <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.35A9.14 9.14 0 000 52.8h27.5z" fill="#00ac47" />
                                <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.3c.8-1.4 1.2-2.95 1.2-4.5H59.8L73.55 76.8z" fill="#ea4335" />
                                <path d="M43.65 25L57.4 1.2A9.14 9.14 0 0053 0H34.3c-1.55 0-3.1.4-4.4 1.2z" fill="#00832d" />
                                <path d="M59.8 52.8H27.5L13.75 76.6c1.35.8 2.9 1.2 4.45 1.2h50.9c1.55 0 3.1-.4 4.45-1.2z" fill="#2684fc" />
                                <path d="M73.4 26.45l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 52.8h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
                            </svg>
                            {t.pages.press.epkButtonLabel}
                        </button>
                    </div>
                </div>
            </section>

            {/* Contest Press Kit Section */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-12 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider">
                            {t.pages.press.contestPressKit.title}
                        </h2>
                        <p className="text-xl text-[#E8D860]/80 font-medium uppercase tracking-widest">
                            {t.pages.press.contestPressKit.subtitle}
                        </p>
                    </div>

                    <div className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto space-y-8">
                        <p className="text-xl text-white/90 italic font-medium">
                            {t.pages.press.contestPressKit.tagline}
                        </p>

                        <p className="whitespace-pre-line">{t.pages.press.contestPressKit.description}</p>

                        <ul className="text-left bg-black/20 p-8 rounded-xl space-y-3 border border-white/5 inline-block w-full max-w-2xl">
                            {t.pages.press.contestPressKit.includes.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-[#E8D860] mt-1 font-bold">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Google Drive Button */}
                    <div className="pt-4">
                        <a
                            href={t.pages.press.contestPressKit.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 py-4 px-8 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 bg-white text-black hover:bg-[#E8D860] hover:scale-105 shadow-lg hover:shadow-[#E8D860]/30"
                        >
                            {/* Google Drive icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                                <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
                                <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.35A9.14 9.14 0 000 52.8h27.5z" fill="#00ac47" />
                                <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.3c.8-1.4 1.2-2.95 1.2-4.5H59.8L73.55 76.8z" fill="#ea4335" />
                                <path d="M43.65 25L57.4 1.2A9.14 9.14 0 0053 0H34.3c-1.55 0-3.1.4-4.4 1.2z" fill="#00832d" />
                                <path d="M59.8 52.8H27.5L13.75 76.6c1.35.8 2.9 1.2 4.45 1.2h50.9c1.55 0 3.1-.4 4.45-1.2z" fill="#2684fc" />
                                <path d="M73.4 26.45l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 52.8h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
                            </svg>
                            {t.pages.press.contestPressKit.buttonLabel}
                        </a>
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
