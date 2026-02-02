"use client";

import { Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };
    return (
        <section className="bg-transparent py-24 px-6 md:px-12 bg-footer">
            <div className="container mx-auto flex flex-col md:flex-row gap-12 justify-between">

                {/* Contact Info */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl font-bold text-white">{t.contact.title}</h2>
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-bold bg-[#E8D860] text-black px-3 py-1 rounded hover:bg-[#D4C46C] transition-colors"
                        >
                            {language === 'en' ? 'ES' : 'EN'}
                        </button>
                    </div>

                    <p className="text-sm text-gray-300 max-w-xs">
                        {language === 'en'
                            ? "Help us give voice to the 53 million invisible caregivers.\n\n100% tax-deductible | Fractured Atlas"
                            : "Ayúdanos a dar voz a los 53 millones de cuidadores invisibles.\n\n100% deducible de impuestos | Fractured Atlas"}
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:info@laultimaestacionfilm.com" className="flex items-center gap-3 text-sm font-medium hover:underline">
                                info@laultimaestacionfilm.com
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/laultimaestacionfilm?igsh=ejVrc2x6M3MycDc2" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8D860] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/share/1GSLYsAgBg/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8D860] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@laultimaestacionfilm" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8D860] transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Support Ticket Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
                    <h3 className="text-2xl font-serif italic text-white">{t.contact.supportTitle}</h3>

                    {/* Ticket Image Link */}
                    <Link href="https://fundraising.fracturedatlas.org/la-ultima-estacion-the-last-station" target="_blank" className="relative w-full max-w-md h-48 transition-transform hover:scale-105 block">
                        <Image
                            src={language === 'en' ? "/TICKET EN INGLES.png" : "/TICKET ESPANOL.png"}
                            alt={language === 'en' ? "Support this journey - Ticket" : "Apoya este viaje - Boleto"}
                            fill
                            className="object-contain object-left"
                        />
                    </Link>
                </div>

            </div>
        </section>
    );
}
