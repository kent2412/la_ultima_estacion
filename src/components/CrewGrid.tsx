"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CrewGrid() {
    const { t } = useLanguage();

    return (
        <section className="bg-transparent py-20 px-6 md:px-12">
            <div className="container mx-auto max-w-5xl space-y-16">

                {/* Intro Text */}
                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-sm md:text-base leading-relaxed">
                    {t.pages.crew.intro}
                </p>

                {/* Crew Cards */}
                <div className="space-y-12">
                    {t.data.crew.map((member, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 items-stretch">
                            {/* Image with Tape */}
                            <div className="relative w-full md:w-[300px] aspect-square shrink-0">
                                <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-800">
                                    <Image
                                        src={member.img || "/inspiration.png"}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="bg-[#1c1c1c] rounded-2xl p-8 flex-1 flex flex-col justify-center relative">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {member.name} <span className="text-white"> - {member.role}</span>
                                    </h3>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
