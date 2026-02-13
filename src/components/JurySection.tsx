"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef, useCallback } from "react";

export default function JurySection() {
    const { t } = useLanguage();
    const [selectedJuror, setSelectedJuror] = useState<typeof t.data.jury[0] | null>(null);

    // Carousel Logic
    const originalJury = t.data.jury;
    // Tripicamos la data para asegurar un loop infinito suave
    const extendedJury = [...originalJury, ...originalJury, ...originalJury];
    const TOTAL_ITEMS = originalJury.length;

    // Comenzamos en el set del medio
    const [currentIndex, setCurrentIndex] = useState(TOTAL_ITEMS);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Funciones de navegación
    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    }, [isTransitioning]);

    // Autoplay
    useEffect(() => {
        if (isPaused || selectedJuror) return;
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [isPaused, selectedJuror, nextSlide]);

    // Manejo del Loop Infinito "Teleport"
    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        // Si llegamos al final del tercer set, saltamos al final del primer set (mismo contenido visual)
        if (currentIndex >= 2 * TOTAL_ITEMS) {
            setCurrentIndex(currentIndex - TOTAL_ITEMS);
        }
        // Si retrocedemos al principio del primer set, saltamos al principio del segundo set
        else if (currentIndex < TOTAL_ITEMS) {
            setCurrentIndex(currentIndex + TOTAL_ITEMS);
        }
    };

    return (
        <section className="bg-transparent py-20 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-16">{t.pages.contest.juryTitle}</h2>

                <div
                    className="relative group/carousel px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Botones de Navegación */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="text-black w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="text-black w-6 h-6" />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="flex w-full [--items-per-screen:2] md:[--items-per-screen:3] lg:[--items-per-screen:5]"
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (100% / var(--items-per-screen))))`,
                                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedJury.map((juror, idx) => (
                                <div
                                    key={idx}
                                    className="flex-none w-[50%] md:w-[33.333%] lg:w-[20%] p-2 md:p-3"
                                >
                                    <div
                                        className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow border border-transparent hover:border-white/20"
                                        onClick={() => setSelectedJuror(juror)}
                                    >
                                        <Image
                                            src={juror.img}
                                            alt={juror.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 md:p-6 pt-12">
                                            <h3 className="text-white font-bold text-lg leading-tight">{juror.name}</h3>
                                            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{juror.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedJuror && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedJuror(null)}>
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>

                        <button
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                            onClick={() => setSelectedJuror(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="w-full md:w-2/5 relative h-80 md:h-auto shrink-0">
                            <Image
                                src={selectedJuror.img}
                                alt={selectedJuror.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:bg-gradient-to-r" />
                        </div>

                        <div className="flex-1 p-8 md:p-12 space-y-6">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-2">{selectedJuror.name}</h3>
                                <p className="text-[#E8D860] font-medium tracking-widest uppercase text-sm">{selectedJuror.role}</p>
                            </div>

                            <div className="w-16 h-1 bg-[#E8D860] rounded-full" />

                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                                {selectedJuror.bio}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
