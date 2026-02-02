"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function HistoryGallery() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="bg-[#1A1A1A] py-24 px-4 overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-20">
                    {t.history.galleryTitle}
                </h2>

                <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-8 md:block md:h-[900px]">

                    {/* 1. Large Left - Train Platform */}
                    <div
                        className="relative w-full aspect-video md:absolute md:top-[10%] md:left-0 md:w-[35%] md:h-[80%] z-10 transform-none md:-rotate-1 transition-transform hover:scale-105 hover:z-50 hover: md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_1.png")}
                    >
                        <Image src="/galeria_1.png" alt="Plataforma" fill className="object-cover opacity-90 drop-shadow-2xl" />
                    </div>

                    {/* 2. Overlap Left - Woman Writing */}
                    <div
                        className="relative w-full aspect-[3/4] md:absolute md:top-[25%] md:left-[30%] md:w-[26%] z-20 transform-none md:rotate-3 transition-transform hover:scale-105 md:hover:scale-110 hover:z-50 md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_2.jpg")}
                    >
                        {/* Tape connecting to Platform */}
                        <div className="hidden md:block absolute top-4 -left-6 w-[100px] h-[40px] rotate-[-15deg] z-30 opacity-80 mix-blend-multiply pointer-events-none">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>
                        <Image src="/galeria_2.jpg" alt="Escritura" fill className="object-cover drop-shadow-2xl" />
                    </div>

                    {/* 3. Top Center - Elderly Couple */}
                    <div
                        className="relative w-full aspect-video md:absolute md:top-[5%] md:left-[38%] md:w-[28%] z-10 transform-none md:-rotate-2 transition-transform hover:scale-105 md:hover:scale-110 hover:z-50 md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_3.JPG")}
                    >
                        {/* Tape connecting to Writing (conceptually) */}
                        <div className="hidden md:block absolute -bottom-4 left-4 w-[90px] h-[35px] rotate-[5deg] z-30 opacity-80 mix-blend-multiply pointer-events-none">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>
                        <Image src="/galeria_3.JPG" alt="Pareja" fill className="object-cover drop-shadow-2xl" />
                    </div>

                    {/* 4. Top Right - Masks (Moved from position 5) */}
                    <div
                        className="relative w-full aspect-video md:absolute md:top-[8%] right-[2%] md:w-[34%] z-20 transform-none md:rotate-3 transition-transform hover:scale-105 md:hover:scale-110 hover:z-50 md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_4.JPG")}
                    >
                        {/* Tape connecting to Elderly Couple */}
                        <div className="hidden md:block absolute top-4 -left-6 w-[100px] h-[40px] rotate-[-10deg] z-30 opacity-80 mix-blend-multiply pointer-events-none">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>
                        <Image src="/galeria_4.JPG" alt="Mascarillas" fill className="object-cover drop-shadow-2xl" />
                    </div>

                    {/* 5. Center - Two Women (Moved from position 4) */}
                    <div
                        className="relative w-full aspect-video md:absolute md:top-[34%] md:left-[52%] md:w-[42%] z-10 transform-none md:rotate-1 transition-transform hover:scale-105 md:hover:scale-110 hover:z-50 md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_5.JPG")}
                    >
                        {/* Tape connecting to Masks */}
                        <div className="hidden md:block absolute -top-3 right-2 w-[80px] h-[35px] rotate-[15deg] z-30 opacity-80 mix-blend-multiply pointer-events-none">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>
                        <Image src="/galeria_5.JPG" alt="Amigas" fill className="object-cover drop-shadow-2xl" />
                    </div>

                    {/* 6. Bottom Center - Park/Dancing */}
                    <div
                        className="relative w-full aspect-video md:absolute md:bottom-[5%] md:left-[35%] md:w-[40%] z-20 transform-none md:-rotate-2 transition-transform hover:scale-105 md:hover:scale-110 hover:z-50 md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_2.jpg")}
                    >
                        {/* Tape connecting to Two Women */}
                        <div className="hidden md:block absolute -top-4 right-1/2 translate-x-1/2 w-[90px] h-[40px] rotate-[0deg] z-30 opacity-80 mix-blend-multiply pointer-events-none">
                            <Image src="/tape.png" alt="" fill className="object-contain" />
                        </div>
                        <Image src="/galeria_2.jpg" alt="Parque" fill className="object-cover drop-shadow-2xl" />
                    </div>

                    {/* 7. Bottom Right - Fire/Kiss */}
                    <div
                        className="relative w-full aspect-[3/4] md:absolute md:bottom-[2%] md:right-[1%] md:w-[25%] z-10 transform-none md:rotate-2 transition-transform hover:scale-105 md:hover:scale-110 hover:z-50 md:hover:rotate-0 cursor-pointer"
                        onClick={() => setSelectedImage("/galeria_6.jpg")}
                    >
                        <Image src="/galeria_6.jpg" alt="Fuego" fill className="object-cover sepia-[20%] drop-shadow-2xl" />
                    </div>

                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                        <Image
                            src={selectedImage}
                            alt="Gallery Preview"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
