"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactInfoSection() {
    const { t } = useLanguage();
    return (
        <section className="bg-transparent py-16 px-6 relative">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Heading */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        {t.pages.press.contactTitle}
                    </h2>
                </div>

                {/* Info List */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-mono tracking-wider">111 111 1111 111</span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-mono tracking-wider">user@gmail.com</span>
                    </div>

                    <div className="flex items-start gap-4 text-gray-300">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="max-w-xs">
                            {t.pages.press.contactAddress}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
