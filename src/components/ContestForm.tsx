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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
