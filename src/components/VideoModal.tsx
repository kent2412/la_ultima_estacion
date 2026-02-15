"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    const [embedUrl, setEmbedUrl] = useState("");

    useEffect(() => {
        if (videoUrl) {
            let id = "";
            // Handle standard YouTube watch URLs
            if (videoUrl.includes("v=")) {
                id = videoUrl.split("v=")[1].split("&")[0];
            }
            // Handle YouTube playlists
            else if (videoUrl.includes("list=")) {
                const listId = videoUrl.split("list=")[1].split("&")[0];
                id = `?listType=playlist&list=${listId}`;
            }
            // Handle truncated youtu.be URLs
            else if (videoUrl.includes("youtu.be/")) {
                id = videoUrl.split("youtu.be/")[1];
            }
            // Handle existing embed URLs
            else if (videoUrl.includes("embed/")) {
                id = videoUrl.split("embed/")[1].split("?")[0];
            }

            if (id) {
                const separator = id.includes("?") ? "&" : "?";
                const baseUrl = id.startsWith("?") ? "https://www.youtube.com/embed" : "https://www.youtube.com/embed/";
                setEmbedUrl(`${baseUrl}${id}${separator}autoplay=1`);
            } else {
                // Fallback for non-YouTube or already correct URLs
                setEmbedUrl(videoUrl);
            }
        }
    }, [videoUrl]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-[#E8D860] transition-colors"
                aria-label="Cerrar modal"
            >
                <X size={40} />
            </button>
            <div
                className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative border border-white/10"
                onClick={e => e.stopPropagation()}
            >
                <iframe
                    src={embedUrl}
                    title="Video Player"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
