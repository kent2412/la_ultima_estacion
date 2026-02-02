"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HistoryBloopers() {
    const { t } = useLanguage();
    const images = ["/blooper-1.png", "/gallery-2.png", "/blooper-1.png"];

    return (
        <section className="bg-transparent py-24 px-6 md:px-12 text-white">
            <div className="container mx-auto space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                    {t.history.bloopersTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.data.bloopers.map((item, idx) => (
                        <div key={idx} className="relative group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900 border border-white/10">
                                <Image
                                    src={images[idx] || "/blooper-1.png"}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <Play className="fill-white text-white w-6 h-6 ml-1" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-center text-sm text-gray-400 group-hover:text-[#E8D860] transition-colors">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
