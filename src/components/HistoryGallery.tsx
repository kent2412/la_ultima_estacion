"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useCallback } from "react";

const GALLERY_IMAGES = [
    { src: "/galeria1.jpg", alt: "Galeria 1", className: "md:top-[2%] md:left-[5%] md:w-[32%] md:-rotate-3", zIndex: "z-10" },
    { src: "/galeria2.jpg", alt: "Galeria 2", className: "md:top-[5%] md:left-[28%] md:w-[28%] md:rotate-2", zIndex: "z-20", tape: { pos: "top-4 -left-6", rot: "-rotate-[15deg]" } },
    { src: "/galeria3.jpg", alt: "Galeria 3", className: "md:top-[2%] md:left-[52%] md:w-[30%] md:-rotate-1", zIndex: "z-10", tape: { pos: "-bottom-4 left-4", rot: "rotate-[5deg]" } },
    { src: "/galeria4.jpg", alt: "Galeria 4", className: "md:top-[22%] md:left-[2%] md:w-[26%] md:rotate-4", zIndex: "z-30", tape: { pos: "top-4 -right-6", rot: "rotate-[10deg]" } },
    { src: "/galeria5.jpg", alt: "Galeria 5", className: "md:top-[25%] md:left-[25%] md:w-[38%] md:-rotate-2", zIndex: "z-10" },
    { src: "/galeria6.jpg", alt: "Galeria 6", className: "md:top-[18%] md:left-[60%] md:w-[28%] md:rotate-3", zIndex: "z-20", tape: { pos: "-top-3 right-2", rot: "rotate-[15deg]" } },
    { src: "/galeria7.jpg", alt: "Galeria 7", className: "md:top-[42%] md:left-[8%] md:w-[30%] md:-rotate-4", zIndex: "z-20" },
    { src: "/galeria8.jpg", alt: "Galeria 8", className: "md:top-[48%] md:left-[35%] md:w-[33%] md:rotate-1", zIndex: "z-30", tape: { pos: "-top-4 right-1/2 translate-x-1/2", rot: "rotate-[0deg]" } },
    { src: "/galeria9.jpg", alt: "Galeria 9", className: "md:top-[40%] md:left-[64%] md:w-[28%] md:-rotate-3", zIndex: "z-10" },
    { src: "/galeria10.jpg", alt: "Galeria 10", className: "md:top-[65%] md:left-[5%] md:w-[32%] md:rotate-2", zIndex: "z-10" },
    { src: "/galeria11.jpg", alt: "Galeria 11", className: "md:top-[68%] md:left-[32%] md:w-[28%] md:-rotate-2", zIndex: "z-20", tape: { pos: "top-4 -left-6", rot: "-rotate-[10deg]" } },
    { src: "/galeria12.JPG", alt: "Galeria 12", className: "md:top-[62%] md:left-[60%] md:w-[32%] md:rotate-3", zIndex: "z-10" },
];

export default function HistoryGallery() {
    const { t } = useLanguage();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    }, [selectedIndex]);

    const handlePrev = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    }, [selectedIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setSelectedIndex(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handleNext, handlePrev]);

    return (
        <section className="bg-[#1A1A1A] py-24 px-4 overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-20">
                    {t.history.galleryTitle}
                </h2>

                <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-8 md:block md:h-[1000px]">
                    {GALLERY_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`relative w-full aspect-video md:absolute ${img.className} ${img.zIndex} transform-none transition-transform hover:scale-105 hover:z-50 md:hover:rotate-0 cursor-pointer`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            {img.tape && (
                                <div className={`hidden md:block absolute ${img.tape.pos} w-[100px] h-[40px] ${img.tape.rot} z-30 opacity-80 mix-blend-multiply pointer-events-none`}>
                                    <Image src="/tape.png" alt="" fill className="object-contain" />
                                </div>
                            )}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className={`object-cover ${index % 3 === 0 ? 'opacity-90' : ''} drop-shadow-2xl`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {/* Control Anterior */}
                        <button
                            className="absolute left-4 md:-left-12 z-[110] text-white/50 hover:text-white transition-colors p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <div className="relative w-full h-full">
                            <Image
                                src={GALLERY_IMAGES[selectedIndex].src}
                                alt={GALLERY_IMAGES[selectedIndex].alt}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </div>

                        {/* Control Siguiente */}
                        <button
                            className="absolute right-4 md:-right-12 z-[110] text-white/50 hover:text-white transition-colors p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Botón Cerrar */}
                        <button
                            className="absolute -top-12 right-0 md:top-0 md:-right-12 text-white/50 hover:text-white transition-colors p-2"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Indicador de número */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 font-medium">
                            {selectedIndex + 1} / {GALLERY_IMAGES.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
