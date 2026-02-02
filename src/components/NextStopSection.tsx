"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function NextStopSection() {
    const { t } = useLanguage();
    return (
        <section className="bg-transparent py-24 px-6 md:px-12 overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16">

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t.nextStop.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-black">
                        <Link
                            href="/historia"
                            className="p-6 bg-[#BEBB43] rounded-lg text-sm font-medium flex items-center justify-between min-w-[200px]"
                        >
                            {t.nextStop.stories}
                            <span className="ml-2">→</span>
                        </Link>
                        <Link
                            href="/elenco"
                            className="p-6 bg-[#BEBB43] rounded-lg text-sm font-medium flex items-center justify-between min-w-[200px]"
                        >
                            {t.nextStop.screenings}
                            <span className="ml-2">→</span>
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com/laultimaestacionfilm?igsh=ejVrc2x6M3MycDc2" target="_blank" rel="noopener noreferrer" className="w-32 h-24 border border-[#ffffff] bg-[#2A2A2A] rounded-lg flex items-center justify-center text-white hover:bg-[#3A3A3A] transition-colors">
                            <Instagram className="w-8 h-8" />
                        </Link>
                        <Link href="https://www.facebook.com/share/1GSLYsAgBg/" target="_blank" rel="noopener noreferrer" className="w-32 h-24 border border-[#ffffff] bg-[#2A2A2A] rounded-lg flex items-center justify-center text-white hover:bg-[#3A3A3A] transition-colors">
                            <Facebook className="w-8 h-8" />
                        </Link>
                        <Link href="https://www.youtube.com/@laultimaestacionfilm" target="_blank" rel="noopener noreferrer" className="w-32 h-24 border border-[#ffffff] bg-[#2A2A2A] rounded-lg flex items-center justify-center text-white hover:bg-[#3A3A3A] transition-colors">
                            <Youtube className="w-8 h-8" />
                        </Link>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/3] shadow-lg rotate-1">
                    <Image src="/home_2.jpg" alt="Próxima parada" fill className="object-cover" />
                    {/* Tape decoration - Bottom Right in design but Top Right typical. Design shows top right-ish corner tape */}
                    <div className="absolute -top-4 -right-4 w-[117px] h-[51px] rotate-[30deg] shadow-sm z-10">
                        <Image src="/tape.png" alt="" fill className="object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
}
