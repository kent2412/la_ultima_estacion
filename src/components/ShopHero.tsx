"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ShopHero() {
    const { t } = useLanguage();
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner_hero.jpg" // Placeholder
                    alt="Tienda Background"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10">
                <div className="md:ml-20 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight whitespace-pre-line">
                        {t.pages.shop.title.replace(" + ", " + \n")}
                    </h1>
                </div>
            </div>
        </section>
    );
}
