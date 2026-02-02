"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ScreeningsList() {
    const { t } = useLanguage();
    // Using simple mock processing for filtering, in a real app this might be different
    const upcomingEvents = t.data.events.filter(e => e.category === "upcoming");
    const forumEvents = t.data.events.filter(e => e.category === "forums");

    const EventCard = ({ event }: { event: any }) => (
        <div className="flex flex-col md:flex-row bg-[#2A2A2A] rounded-xl overflow-hidden mb-6 group border border-white/5 hover:border-white/10 transition-colors">
            {/* Left: Details */}
            <div className="p-6 md:p-8 md:w-1/3 flex flex-col justify-center space-y-3 border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 text-[#C8D15D]" />
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Clock className="w-4 h-4 text-[#C8D15D]" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-[#C8D15D] mt-1 shrink-0" />
                    <span>{event.location}</span>
                </div>
            </div>

            {/* Center: Description */}
            <div className="p-6 md:p-8 md:w-1/3 flex items-center">
                <h3 className="text-xl font-bold text-white leading-tight">
                    {event.description}
                </h3>
            </div>

            {/* Right: Action */}
            <div className="bg-[#C8D15D] p-6 md:p-8 md:w-1/3 flex items-center justify-center">
                <button className="border border-black text-black px-8 py-2 rounded-full font-bold hover:bg-black hover:text-[#C8D15D] transition-colors">
                    {t.pages.screenings.eventButton}
                </button>
            </div>
        </div>
    );

    return (
        <section className="bg-transparent py-16 px-4 md:px-12">
            <div className="container mx-auto max-w-5xl">
                {/* Upcoming */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                        {t.pages.screenings.upcomingTitle}
                    </h2>
                    {upcomingEvents.map((event, idx) => (
                        <EventCard key={idx} event={event} />
                    ))}
                </div>

                {/* Forums */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                        {t.pages.screenings.forumsTitle}
                    </h2>
                    {forumEvents.map((event, idx) => (
                        <EventCard key={idx} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
}
