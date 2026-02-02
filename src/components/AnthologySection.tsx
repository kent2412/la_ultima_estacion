"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AnthologySection() {
    const { t } = useLanguage();
    return (
        <section className="bg-transparent py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text */}
                <div className="space-y-8 order-2 md:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t.anthology.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {t.anthology.text}
                    </p>
                    <button className="bg-[#E8D860] text-black font-bold px-8 py-3 rounded flex items-center gap-2 hover:bg-[#D4C345] transition-colors">
                        {t.anthology.button} <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Mockup Image */}
                <div className="relative md:order-2 h-[400px] w-full">
                    {/* Tape */}
                    <div className="absolute -top-6 -left-10 w-[117px] h-[51px] -rotate-12 z-20 shadow-lg">
                        <Image src="/tape.png" alt="" fill className="object-contain" />
                    </div>

                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/gallery-1.png" // Using gallery image as "Book Cover" or scene
                            alt="Antología Cover"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <h3 className="text-white text-3xl font-serif italic">{t.anthology.bookTitle}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function EventSection() {
    // Collage of event photos
    return (
        <section className="bg-transparent py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Title & Info */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Evento de presentación</h2>
                        <p className="text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    {/* Hero Photo */}
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                        <Image src="/inspiration.png" alt="Evento" fill className="object-cover sepia-[20%]" />
                    </div>
                </div>

                {/* Small Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative aspect-video rounded hover:opacity-80 transition-opacity cursor-pointer">
                            <Image src="/gallery-2.png" alt={`Foto evento ${i}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
