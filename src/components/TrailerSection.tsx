"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import VideoPlayer from "./VideoPlayer";
import VideoModal from "./VideoModal";

export default function TrailerSection() {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/watch?v=S_WzHMxOu9g";

    return (
        <section className="relative py-32 px-6 md:px-12 flex flex-col items-center bg-trailer">
            {/* Gradients */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{t.trailer.title}</h2>
                    <p className="text-sm uppercase tracking-widest text-[#E0E0E0]">{t.trailer.subtitle}</p>
                </div>

                {/* Video Container - Browser Window Style */}
                <VideoPlayer
                    videoUrl={videoUrl}
                    onPlay={() => setIsModalOpen(true)}
                />
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={videoUrl}
            />
        </section>
    );
}
