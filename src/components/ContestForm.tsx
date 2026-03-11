"use client";

import Image from "next/image";
import { Upload } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export default function ContestForm() {
    const { t } = useLanguage();
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const contestDate = new Date("2026-03-29T00:00:00-04:00");
        const now = new Date();
        setIsEnabled(now >= contestDate);
    }, []);

    return (
        <section className="bg-transparent py-14 px-6 md:px-12 relative overflow-hidden">
            {/* Background blur/shadow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8D860]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* Main Content: Centered and readable */}
                <div className="max-w-4xl mx-auto space-y-12 text-gray-300">

                    {/* Header */}
                    <div className="space-y-6 text-center">
                        <div className="space-y-2">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-copperplate drop-shadow-lg uppercase">
                                {t.pages.contest.openCallTitle}
                            </h2>
                            <p className="text-2xl md:text-3xl font-bold text-[#E8D860] font-copperplate tracking-wide uppercase">
                                {t.pages.contest.openCallSubtitle}
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-4">
                            <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-gray-200">
                                {t.pages.contest.openCallText}
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Schedule */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#E8D860] uppercase tracking-widest text-center">{t.pages.contest.scheduleTitle}</h3>
                        <div className="max-w-3xl mx-auto bg-black/20 p-6 rounded-xl border border-white/5 shadow-inner">
                            <div className="grid gap-4">
                                {t.pages.contest.schedule.map((item, index) => (
                                    <div key={index} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-6 border-b border-white/5 pb-4 last:border-0 last:pb-0 text-base">
                                        <span className="text-[#E8D860] font-bold font-copperplate">{item.date}</span>
                                        <span className="text-gray-300 leading-relaxed">{item.event}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rules */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-[#E8D860] uppercase tracking-widest text-center">{t.pages.contest.rulesTitle}</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Participants */}
                            <div className="space-y-3 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-[#E8D860]/30 transition-colors">
                                <h4 className="text-white font-bold uppercase text-sm tracking-wider border-l-4 border-[#E8D860] pl-3">
                                    {t.pages.contest.rules.participantsTitle}
                                </h4>
                                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-400">
                                    {t.pages.contest.rules.participants.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Theme */}
                            <div className="space-y-3 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-[#E8D860]/30 transition-colors">
                                <h4 className="text-white font-bold uppercase text-sm tracking-wider border-l-4 border-[#E8D860] pl-3">
                                    {t.pages.contest.rules.themeTitle}
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {t.pages.contest.rules.theme}
                                </p>
                            </div>

                            {/* Format */}
                            <div className="space-y-3 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-[#E8D860]/30 transition-colors">
                                <h4 className="text-white font-bold uppercase text-sm tracking-wider border-l-4 border-[#E8D860] pl-3">
                                    {t.pages.contest.rules.formatTitle}
                                </h4>
                                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-400">
                                    {t.pages.contest.rules.format.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Submission */}
                            <div className="space-y-6 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-[#E8D860]/30 transition-colors flex flex-col items-center text-center">
                                <h4 className="text-white font-bold uppercase text-sm tracking-wider border-l-4 border-[#E8D860] pl-3 self-start">
                                    {t.pages.contest.rules.submissionTitle}
                                </h4>
                                <div className="py-4 w-full flex flex-col items-center gap-4">
                                    <a
                                        href={isEnabled ? t.pages.contest.form.googleFormLink : undefined}
                                        target={isEnabled ? "_blank" : undefined}
                                        rel={isEnabled ? "noopener noreferrer" : undefined}
                                        className={`inline-flex items-center justify-between gap-3 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform font-copperplate uppercase tracking-wider ${
                                            isEnabled
                                                ? "bg-[#278641] text-white shadow-[0_0_20px_rgba(232,216,96,0.2)] hover:shadow-[0_0_30px_rgba(232,216,96,0.4)] hover:-translate-y-1 active:scale-95"
                                                : "bg-gray-600 text-gray-400 cursor-not-allowed opacity-60"
                                        }`}
                                        onClick={(e) => !isEnabled && e.preventDefault()}
                                    >
                                        Google Form
                                        <Image
                                            src="/Google_Drive_logo.png"
                                            alt="Google Drive Logo"
                                            width={24}
                                            height={24}
                                            className={`w-6 h-6 object-contain ${!isEnabled ? "grayscale opacity-50" : ""}`}
                                        />
                                    </a>
                                    {!isEnabled && (
                                        <p className="text-[#E8D860] text-sm font-medium animate-pulse">
                                            {t.pages.contest.form.availableDate}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Prizes & Copyright */}
                    {/* Prizes & Copyright */}
                    <div className="space-y-12">
                        {/* Prizes */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#E8D860] uppercase tracking-widest text-center">{t.pages.contest.prizesLabel}</h3>
                            <div className="overflow-x-auto bg-black/20 p-6 rounded-xl border border-white/5 shadow-inner">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="py-4 px-6 font-copperplate text-[#E8D860] uppercase tracking-wider text-sm w-1/4">{t.pages.contest.prizesTable.headers.prize}</th>
                                            <th className="py-4 px-6 font-copperplate text-[#E8D860] uppercase tracking-wider text-sm w-1/4">{t.pages.contest.prizesTable.headers.amount}</th>
                                            <th className="py-4 px-6 font-copperplate text-[#E8D860] uppercase tracking-wider text-sm w-1/2">{t.pages.contest.prizesTable.headers.benefits}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300 text-sm">
                                        {t.pages.contest.prizesTable.rows.map((row, index) => (
                                            <tr key={index} className={`border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors ${row.highlight ? 'bg-white/5' : ''}`}>
                                                <td className="py-4 px-6 font-bold text-white whitespace-nowrap">{row.prize}</td>
                                                <td className="py-4 px-6 text-[#E8D860] font-bold whitespace-nowrap">{row.amount}</td>
                                                <td className="py-4 px-6 leading-relaxed">{row.benefits}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="space-y-4 max-w-3xl mx-auto text-center">
                            <h3 className="text-xl font-bold text-[#E8D860] uppercase tracking-widest">{t.pages.contest.copyrightTitle}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {t.pages.contest.copyrightText}
                            </p>
                            <p className="text-sm text-[#E8D860] font-medium leading-relaxed">
                                {t.pages.contest.copyrightContact}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
