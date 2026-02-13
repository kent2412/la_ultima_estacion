"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

import Image from "next/image";

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: t.navbar.home, href: "/" },
        { name: t.navbar.history, href: "/historia" },
        { name: t.navbar.cast, href: "/elenco" },
        { name: t.navbar.crew, href: "/equipo" },
        { name: t.navbar.contest, href: "/concurso" },
        { name: t.navbar.testimony, href: "/testimoniales" },
        { name: t.navbar.press, href: "/prensa" },
        { name: t.navbar.screenings, href: "/proyecciones" },
        { name: t.navbar.shop, href: "/tienda" },
    ];

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl flex items-center justify-between px-8 py-3 rounded-full backdrop-blur-md bg-black/5 shadow-sm border border-white/10 text-white transition-all duration-300">
                <Link href="/" className="relative h-10 w-32 md:w-40">
                    <Image
                        src={language === 'es' ? "/logo espanol.png" : "/logo ingles.png"}
                        alt="La Última Estación"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-[var(--accent-tape)] transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                        className="text-[10px] sm:text-xs font-bold bg-[#E8D860] text-black px-2 py-1 rounded hover:bg-[#D4C46C] transition-colors ml-2"
                    >
                        {language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[#ECEBE7] flex flex-col pt-32 px-8 transition-all duration-500 ease-in-out ${isOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col gap-6 text-xl font-medium uppercase tracking-wider text-[#1A1A1A]">
                    {links.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`border-b border-gray-300 pb-2 hover:text-[#B05D30] transition-all duration-300 delay-[${index * 50}ms] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setLanguage(language === 'en' ? 'es' : 'en');
                            setIsOpen(false);
                        }}
                        className={`text-left border-b border-gray-300 pb-2 hover:text-[#B05D30] transition-all duration-300 delay-[${links.length * 50}ms] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                            }`}
                        style={{ transitionDelay: `${links.length * 50}ms` }}
                    >
                        {language === 'en' ? 'Español' : 'English'}
                    </button>
                </div>
            </div>
        </>
    );
}
