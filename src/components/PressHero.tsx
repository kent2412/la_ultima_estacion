"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function PressHero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner_hero.jpg" // Using placeholder, similar to design
                    alt="Kiosko Background"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center md:text-left">
                <div className="md:ml-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 lowercase">
                        {t.pages.press.title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
