"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import VideoPlayer from "./VideoPlayer";
import VideoModal from "./VideoModal";

export default function HistorySection() {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Placeholder URL found in code, keeping it for now but wiring up the modal
    const videoUrl = "https://www.youtube.com/playlist?list=PLQRwPThFq4Ox3a1nu8sid8_0TDUGgWgjA";

    return (
        <section id="historia" className="bg-transparent text-[#ECEBE7] py-24 px-6 md:px-12 overflow-hidden">
            <div className="container mx-auto space-y-32">
                {/* La Historia */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            {t.history.historyTitle}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                            {t.history.historyText}
                        </p>
                    </div>

                    <div className="relative w-full md:w-1/2 aspect-[4/3]">
                        {/* Tape decoration */}
                        <div className="absolute -top-6 -left-6 z-10 w-[117px] h-[51px] rotate-[-15deg] shadow-md transition-transform hover:scale-105">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>

                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl filter grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/history.png"
                                alt="Mujer escribiendo la historia"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* La Realidad Invisible */}
                <div className="space-y-12 py-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
                        {t.history.invisibleReality.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.history.invisibleReality.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-2 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[#E5A85C]/50 transition-colors duration-300">
                                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E5A85C]">
                                    {stat.value}
                                </span>
                                <span className="text-sm md:text-base text-gray-300">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                            {t.history.invisibleReality.text}
                        </p>
                    </div>
                </div>

                {/* La Visón */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                    <div className="relative w-full md:w-1/2 aspect-[4/3]">
                        {/* Tape decoration */}
                        <div className="absolute -top-6 -left-6 z-10 w-[117px] h-[51px] rotate-[-15deg] shadow-md transition-transform hover:scale-105">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>

                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl filter grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/director.jpg"
                                alt="Director"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            {t.history.visionTitle}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                            {t.history.visionText}
                        </p>
                    </div>
                </div>

                {/* Video Vision */}
                <div className="space-y-12">
                    <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            {t.history.videoVoicesTitle}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                            {t.history.videoVoicesText}
                        </p>
                    </div>

                    <div className="w-full flex justify-center">
                        <VideoPlayer
                            videoUrl={videoUrl}
                            onPlay={() => setIsModalOpen(true)}
                        />
                    </div>
                </div>

                {/* La Inspiración */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            {t.history.inspirationTitle}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                            {t.history.inspirationText}
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/2 aspect-[4/3]">
                        {/* Tape decoration */}
                        <div className="absolute -top-6 -right-6 z-10 w-[117px] h-[51px] rotate-[15deg] shadow-md transition-transform hover:scale-105">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>

                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl filter grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/Jackie-Zambrano.jpeg"
                                alt="Pareja mayor inspiradora"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={videoUrl}
            />
        </section>
    );
}
