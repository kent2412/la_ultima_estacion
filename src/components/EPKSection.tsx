"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function EPKSection() {
    const { t } = useLanguage();
    return (
        <section className="bg-transparent py-16 px-4 md:px-12">
            <div className="container mx-auto">
                <div className="bg-[#2A2A2A] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-white/5">

                    {/* Background Texture/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

                    {/* Left: Image (Book/Dossier Mockup) */}
                    <div className="w-full md:w-1/2 flex justify-center relative z-10">
                        <div className="relative w-64 md:w-80 aspect-[3/4] rotate-[-12deg] shadow-2xl transform hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/inspiration.png" // Placeholder for Dossier cover
                                alt={t.pages.press.dossierTitle}
                                fill
                                className="object-cover rounded-lg"
                            />
                            {/* Overlay Title for effect if needed */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[#E8D860] font-bold text-center text-xl bg-black/50 p-2 rounded transform -rotate-45">
                                    THE LAST STATION
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 space-y-6 relative z-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {t.pages.press.dossierTitle}
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto md:mx-0">
                            {t.pages.press.dossierText}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                            <button disabled className="inline-flex items-center gap-3 bg-transparent border border-white/20 text-white/50 px-6 py-3 rounded-lg font-bold cursor-not-allowed opacity-60 text-sm uppercase tracking-wider">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-4 h-4 flex-shrink-0 opacity-50" aria-hidden="true">
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

                </div>
            </div>
        </section>
    );
}
