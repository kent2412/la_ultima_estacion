"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
                            <button className="bg-[#E8D860] hover:bg-[#D4C345] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                                {t.pages.press.buttons.pdf} <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="bg-[#E8D860] hover:bg-[#D4C345] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                                {t.pages.press.buttons.flyer} <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="bg-[#E8D860] hover:bg-[#D4C345] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                                {t.pages.press.buttons.poster} <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
