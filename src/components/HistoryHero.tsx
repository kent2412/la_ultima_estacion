"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HistoryHero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex flex-col justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/banner_hero.jpg" // Using existing train platform image
                    alt="La Última Estación - Andén"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /> {/* Blend to dark section */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
                    {t.pages.history.title}
                </h1>
            </div>
        </section>
    );
}
