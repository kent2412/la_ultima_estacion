"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PastScreenings() {
    const { t } = useLanguage();
    // In a real app we'd likely map these images to the data items or have them in the data
    const images = ["/gallery-1.png", "/inspiration.png", "/blooper-1.png"];

    return (
        <section className="bg-transparent py-16 px-4 md:px-12 relative overflow-hidden">
            {/* Subtle background glow/fog effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-50" />

            <div className="container mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    {t.pages.screenings.pastTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.data.pastEvents.map((event, idx) => (
                        <div key={idx} className="bg-[#2A2A2A] rounded-lg overflow-hidden group">
                            {/* Header */}
                            <div className="p-4 border-b border-white/5">
                                <p className="text-xs text-gray-400 font-bold uppercase">{event.date}</p>
                                <h3 className="text-white font-bold text-lg">{event.title}</h3>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-video">
                                <Image
                                    src={images[idx] || "/inspiration.png"}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-white/5">
                                <button className="text-[#C8D15D] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                    {t.pages.screenings.viewMore} <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
