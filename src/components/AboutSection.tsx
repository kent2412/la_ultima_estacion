"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
    const { t } = useLanguage();
    return (
        <section className="bg-transparent py-20 px-6 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image Placeholder */}
                <div className="relative w-full md:w-1/2 aspect-video shadow-lg">
                    <Image src="/home_1.jpg" alt="El viaje comienza" fill className="object-cover" />
                    {/* Tape decoration */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[117px] h-[51px] rotate-[-2deg] shadow-sm z-10">
                        <Image src="/tape.png" alt="" fill className="object-contain" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        {t.about.title}
                    </h2>
                    <p className="text-sm md:text-base leading-relaxed text-gray-300 whitespace-pre-line">
                        {t.about.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
