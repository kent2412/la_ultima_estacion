"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function CastHero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex flex-col justify-center">
            {/* Background Image - Reusing train platform for consistency */}
            <div className="absolute inset-0">
                <Image
                    src="/banner_hero.jpg"
                    alt="Pasajeros del tren"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg mb-6">
                    {t.pages.cast.title}
                </h1>
            </div>
        </section>
    );
}
