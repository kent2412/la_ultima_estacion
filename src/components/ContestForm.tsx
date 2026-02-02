"use client";

import Image from "next/image";
import { Upload } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContestForm() {
    const { t } = useLanguage();
    return (
        <section className="bg-transparent py-14 px-6 md:px-12 relative overflow-hidden">
            {/* Background blur/shadow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8D860]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* Main Content: Centered and readable */}
                <div className="max-w-4xl mx-auto space-y-12 text-gray-300">

                    {/* Header */}
                    <div className="space-y-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-copperplate drop-shadow-lg">
                            {t.pages.contest.openCallTitle}
                        </h2>
                        <p className="text-lg leading-relaxed whitespace-pre-wrap text-gray-200 max-w-3xl mx-auto">
                            {t.pages.contest.openCallText}
                        </p>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Schedule */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-[#E8D860] uppercase tracking-widest text-center">{t.pages.contest.scheduleTitle}</h3>
                        <div className="grid gap-4 max-w-3xl mx-auto bg-black/20 p-6 rounded-xl border border-white/5 shadow-inner">
                            {t.pages.contest.schedule.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-b border-white/5 pb-3 last:border-0 last:pb-0 text-base">
                                    <span className="text-white font-bold min-w-[200px] text-[#E8D860]">{item.date}</span>
                                    <span className="text-gray-300">{item.event}</span>
                                </div>
                            ))}
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
                            <div className="space-y-3 bg-white/5 p-6 rounded-lg border border-white/5 hover:border-[#E8D860]/30 transition-colors">
                                <h4 className="text-white font-bold uppercase text-sm tracking-wider border-l-4 border-[#E8D860] pl-3">
                                    {t.pages.contest.rules.submissionTitle}
                                </h4>
                                <ul className="list-none space-y-1 text-sm text-gray-400">
                                    {t.pages.contest.rules.submission.map((item, i) => (
                                        <li key={i} className="bg-white/10 px-3 py-1 rounded inline-block mr-2 mb-2 text-white">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Prizes & Copyright */}
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Prizes */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#E8D860] uppercase tracking-widest">{t.pages.contest.prizesLabel}</h3>
                            <ul className="space-y-3 text-gray-300 border-l border-white/10 pl-6 py-2">
                                <li className="font-bold text-white text-lg flex items-center gap-3">
                                    <span className="text-2xl">🥇</span> {t.pages.contest.prizesList.first}
                                </li>
                                <li className="font-bold text-white/90 text-base flex items-center gap-3">
                                    <span className="text-xl">🥈</span> {t.pages.contest.prizesList.second}
                                </li>
                                <li className="font-bold text-white/80 text-base flex items-center gap-3">
                                    <span className="text-xl">🥉</span> {t.pages.contest.prizesList.third}
                                </li>
                                <li className="text-sm pt-2 text-gray-400 italic leading-snug">{t.pages.contest.prizesList.final}</li>
                                <li className="text-sm text-gray-400 italic leading-snug">{t.pages.contest.prizesList.video}</li>
                            </ul>
                        </div>

                        {/* Copyright */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#E8D860] uppercase tracking-widest">{t.pages.contest.copyrightTitle}</h3>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-sm text-gray-400 leading-relaxed text-justify">
                                {t.pages.contest.copyrightText}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
