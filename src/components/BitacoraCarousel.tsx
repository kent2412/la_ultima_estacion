"use client";

import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import VideoModal from "./VideoModal";

const videos = [
    { id: 1, title: "Pedro Pérez", country: "Colombia", img: "/inspiration.png", flag: "🇨🇴", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 2, title: "Pedro Pérez", country: "Venezuela", img: "/gallery-1.png", flag: "🇻🇪", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 3, title: "Pedro Pérez", country: "México", img: "/gallery-2.png", flag: "🇲🇽", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 4, title: "Maria Garcia", country: "Chile", img: "/blooper-1.png", flag: "🇨🇱", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 5, title: "Juan Lopez", country: "Argentina", img: "/inspiration.png", flag: "🇦🇷", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

export default function BitacoraCarousel() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(1); // Start with second item selected
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    // We want to show 3 items: prev, current, next
    const getVisibleItems = () => {
        const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
        const nextIndex = (currentIndex + 1) % videos.length;
        return [prevIndex, currentIndex, nextIndex];
    };

    const [prevIdx, currIdx, nextIdx] = getVisibleItems();

    return (
        <section className="bg-transparent py-16 px-4 md:px-12 overflow-hidden">
            <div className="container mx-auto text-center mb-12 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] mb-6 uppercase tracking-wider">
                    {t.pages.bitacora.introTitle}
                </h2>
                <div className="text-gray-300 space-y-6 text-lg font-light leading-relaxed text-left max-w-2xl mx-auto">
                    <p>{t.pages.bitacora.podcastSection.intro}</p>

                    <ul className="space-y-2 ml-4 md:ml-8 border-l-2 border-[#E8D860]/50 pl-4 py-1">
                        {t.pages.bitacora.podcastSection.questions.map((question, index) => (
                            <li key={index} className="italic text-white/90">
                                {question}
                            </li>
                        ))}
                    </ul>

                    <p className="font-medium text-[#E8D860]">
                        {t.pages.bitacora.podcastSection.outro}
                    </p>

                    <div className="pt-6 mt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-base">
                        {t.pages.bitacora.podcastSection.details.map((detail, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                                <span className="text-[#E8D860] font-bold uppercase text-xs tracking-wider opacity-80 shrink-0">{detail.label}</span>
                                <span className="text-white font-medium">{detail.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center">

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:-left-8 z-30 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:-right-8 z-30 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
                >
                    <ChevronRight />
                </button>


                {/* Items */}
                <div className="relative w-full h-full flex items-center justify-center perspective-1000">

                    {/* Previous Item */}
                    <div className="absolute w-[40%] md:w-[30%] aspect-[3/4] opacity-40 transform -translate-x-[135%] scale-90 z-10 transition-all duration-500 ease-in-out">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                            <Image src={videos[prevIdx].img} alt="" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold">{videos[prevIdx].title}</p>
                            </div>
                            <div className="absolute bottom-4 right-4 text-2xl">{videos[prevIdx].flag}</div>
                        </div>
                    </div>

                    {/* Current Item */}
                    <div
                        className="absolute w-[70%] md:w-[45%] aspect-[4/3] z-20 shadow-2xl transform scale-100 transition-all duration-500 ease-in-out"
                        onClick={() => setSelectedVideo(videos[currIdx].videoUrl)}
                    >
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-black group cursor-pointer border border-[#E8D860]/20">
                            <Image src={videos[currIdx].img} alt="" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white w-8 h-8 ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-white font-bold text-xl">{videos[currIdx].title}</h3>
                            </div>
                            <div className="absolute bottom-6 right-6 text-4xl">{videos[currIdx].flag}</div>
                        </div>
                    </div>

                    {/* Next Item */}
                    <div className="absolute w-[40%] md:w-[30%] aspect-[3/4] opacity-40 transform translate-x-[135%] scale-90 z-10 transition-all duration-500 ease-in-out">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                            <Image src={videos[nextIdx].img} alt="" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold">{videos[nextIdx].title}</p>
                            </div>
                            <div className="absolute bottom-4 right-4 text-2xl">{videos[nextIdx].flag}</div>
                        </div>
                    </div>

                </div>

            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoUrl={selectedVideo || ""}
            />
        </section>
    );
}
