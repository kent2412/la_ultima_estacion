"use client";

import { Play } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
    videoUrl?: string;
    poster?: string;
    onPlay?: () => void;
}

export default function VideoPlayer({ videoUrl, poster = "/bg_reproductor.png", onPlay }: VideoPlayerProps) {
    const handlePlay = () => {
        if (onPlay) {
            onPlay();
        } else if (videoUrl) {
            window.open(videoUrl, "_blank");
        }
    };

    return (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer" onClick={handlePlay}>
            {/* Window Controls */}
            <div className="h-8 bg-white border-b flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>

            {/* Video Placeholder Area */}
            <div className="relative aspect-video bg-[#D8D8D8] flex items-center justify-center group overflow-hidden">
                <Image src={poster} alt="Video Thumbnail" fill className="object-cover" />
                <div className="relative z-10 w-20 h-20 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all group-hover:bg-black/50 group-hover:scale-110">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
                <span className="sr-only">Reproducir Video</span>
            </div>
        </div>
    );
}
