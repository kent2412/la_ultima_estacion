import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function BitacoraInstructions() {
    const { t } = useLanguage();
    const inst = t.pages.bitacora.instructions;

    return (
        <section className="bg-transparent py-20 px-6 md:px-12 overflow-hidden">

            {/* Section 1: Share Voice */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
                        {inst.shareTitle}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {inst.shareIntro}
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-[#E8D860] font-bold text-xl">{inst.seekingTitle}</h3>
                        <ul className="space-y-2 text-gray-300 list-none">
                            {inst.seeking.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[#E8D860] font-bold text-xl">{inst.formatTitle}</h3>
                        <ul className="space-y-2 text-gray-300 list-none">
                            {inst.format.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#222] p-6 rounded-lg text-sm text-gray-400 border-l-4 border-[#E8D860]">
                        <p className="mb-2 font-medium text-white">{inst.email}</p>
                        <p className="italic">{inst.emailNote}</p>
                    </div>
                </div>
                <div className="relative">
                    {/* Tape */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[117px] h-[51px] rotate-3 z-20 drop-shadow-lg">
                        <Image src="/tape.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                        <Image src="/inspiration.png" alt="Grabando video" fill className="object-cover" />
                    </div>
                </div>
            </div>

            {/* Section 2: Podcast Info */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="relative order-2 md:order-1">
                    {/* Tape */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[117px] h-[51px] -rotate-2 z-20 drop-shadow-lg">
                        <Image src="/tape.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                        <Image src="/gallery-2.png" alt="Podcast Voces del Andén" fill className="object-cover" />
                    </div>
                </div>
                <div className="space-y-6 order-1 md:order-2 text-gray-300">
                    <h2 className="text-3xl md:text-4xl font-bold text-white uppercase leading-tight">
                        {inst.podcastHeadline}
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-300">
                        {inst.podcastIntroPre}
                    </p>

                    <ul className="space-y-3 list-none pl-6 border-l-4 border-[#E8D860]">
                        {inst.podcastQuestions.map((q, i) => (
                            <li key={i} className="text-white font-medium italic">“{q}”</li>
                        ))}
                    </ul>

                    <div className="py-2">
                        <p className="text-xl font-bold text-white mb-3">
                            {inst.podcastTruth}
                        </p>
                        <ul className="space-y-1 list-none">
                            {inst.podcastNoList.map((item, i) => (
                                <li key={i} className="text-[#E8D860] font-medium">• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                        {inst.podcastBottomDesc}
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm pt-4 border-t border-gray-800">
                        {inst.podcastDetails.map((detail, i) => (
                            <div key={i}>
                                <span className="text-[#E8D860] font-bold block uppercase text-xs tracking-wider mb-1">{detail.label}</span>
                                <span className="text-white font-medium">{detail.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-[#222] p-6 rounded-lg border border-[#333] text-center">
                        <h3 className="text-lg font-bold text-white mb-2">{inst.podcastCtaTitle}</h3>
                        <a href={`mailto:${inst.podcastCtaText.replace("Email us at ", "").replace("Escríbenos a ", "")}`} className="text-[#E8D860] font-bold text-lg hover:underline block mb-2 transition-colors">
                            {inst.podcastCtaText}
                        </a>
                        <p className="text-sm text-gray-400">{inst.podcastCtaSubtext}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
