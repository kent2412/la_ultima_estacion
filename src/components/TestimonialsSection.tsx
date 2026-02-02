"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Using a sample video URL for demonstration
    const sampleVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

    const testimonials = [
        { src: "/testimonial-1.png", alt: "Testimonio Principal", video: sampleVideoUrl }, // Left Large
        { src: "/testimonial-2.png", alt: "Testimonio 2", video: sampleVideoUrl },        // Center Top
        { src: "/testimonial-1.png", alt: "Testimonio 3", video: sampleVideoUrl },        // Center Bottom
        { src: "/testimonial-2.png", alt: "Testimonio Derecha", video: sampleVideoUrl }  // Right Large
    ];

    return (
        <section className="bg-transparent py-24">
            <div className="container mx-auto px-4 md:px-12 mb-12">
                <h2 className="text-4xl font-bold text-white text-center">Testimonios</h2>
            </div>

            {/* Grid Container */}
            <div className="w-full max-w-[1400px] mx-auto h-[1000px] md:h-[500px] grid grid-cols-1 md:grid-cols-4 gap-0">

                {/* 1. Left Large (50%) */}
                <div
                    className="md:col-span-2 relative group overflow-hidden border-r border-[#121212] cursor-pointer"
                    onClick={() => setSelectedVideo(testimonials[0].video)}
                >
                    <Image
                        src={testimonials[0].src}
                        alt={testimonials[0].alt}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <Play className="fill-white text-white w-8 h-8 ml-1" />
                        </div>
                    </div>
                </div>

                {/* 2. Center Column (25%) - Split Vertical */}
                <div className="md:col-span-1 grid grid-rows-2 border-r border-[#121212]">
                    {/* Top */}
                    <div
                        className="relative group overflow-hidden border-b border-[#121212] cursor-pointer"
                        onClick={() => setSelectedVideo(testimonials[1].video)}
                    >
                        <Image
                            src={testimonials[1].src}
                            alt={testimonials[1].alt}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <Play className="fill-white text-white w-6 h-6 ml-1" />
                            </div>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div
                        className="relative group overflow-hidden cursor-pointer"
                        onClick={() => setSelectedVideo(testimonials[2].video)}
                    >
                        <Image
                            src={testimonials[2].src}
                            alt={testimonials[2].alt}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <Play className="fill-white text-white w-6 h-6 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Right Large (25%) */}
                <div
                    className="md:col-span-1 relative group overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(testimonials[3].video)}
                >
                    <Image
                        src={testimonials[3].src}
                        alt={testimonials[3].alt}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <Play className="fill-white text-white w-8 h-8 ml-1" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
                    <button
                        className="absolute top-6 right-6 text-white hover:text-[#E8D860] transition-colors"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            src={selectedVideo}
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
