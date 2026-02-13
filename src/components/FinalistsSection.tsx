"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FinalistsSection() {
    const { t } = useLanguage();

    return (
        <section className="bg-transparent py-20 px-6 border-t border-white/5">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">{t.pages.contest.finalistsTitle}</h2>
                <p className="text-[#E8D860] text-xl font-medium tracking-wide">
                    {t.pages.contest.finalistsAnnouncement}
                </p>
            </div>
        </section>
    );
}
