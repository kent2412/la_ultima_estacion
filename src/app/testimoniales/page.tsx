"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import VideoModal from "@/components/VideoModal";
import BitacoraInstructions from "@/components/BitacoraInstructions";
import ContactSection from "@/components/ContactSection";

export default function TestimonialesPage() {
    const { t } = useLanguage();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/playlist?list=PLQRwPThFq4OxrogS395-lffILczwe4Jvo";

    return (
        <main className="min-h-screen bg-black font-sans selection:bg-[#E8D860] selection:text-black">
            <Navbar />
            <Hero title={t.pages.bitacora.title} />

            <section className="py-20 px-4 bg-black relative">
                <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
                    <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                            {t.pages.bitacora.videoTitle}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap">
                            {t.pages.bitacora.videoSubtitle}
                        </p>
                    </div>

                    <VideoPlayer
                        onPlay={() => setIsVideoModalOpen(true)}
                    />
                </div>
            </section>

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                videoUrl={videoUrl}
            />

            <BitacoraInstructions />

            <ContactSection />
        </main>
    );
}
