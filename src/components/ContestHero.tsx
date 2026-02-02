"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ContestHero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex flex-col justify-end pb-20">
            {/* Background Image - Using train/station interior if possible, or platform */}
            <div className="absolute inset-0">
                <Image
                    src="/banner_hero.jpg"
                    alt="Estación de Tren"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg mb-4">
                    {t.pages.contest.title}
                </h1>
            </div>
        </section>
    );
}
