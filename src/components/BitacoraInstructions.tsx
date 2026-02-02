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
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image src="/inspiration.png" alt="Grabando video" fill className="object-cover" />
                    </div>
                </div>
            </div>

            {/* Section 2: Technical Requirements */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="relative order-2 md:order-1">
                    {/* Tape */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[117px] h-[51px] -rotate-2 z-20 drop-shadow-lg">
                        <Image src="/tape.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image src="/gallery-2.png" alt="Setup de grabación" fill className="object-cover" />
                    </div>
                </div>
                <div className="space-y-8 order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
                        {inst.techTitle}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[#E8D860] font-bold text-lg mb-3">{inst.videoTitle}</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {inst.video.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#E8D860] font-bold text-lg mb-3">{inst.audioTitle}</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {inst.audio.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#E8D860] font-bold text-lg mb-3">{inst.contentTitle}</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {inst.content.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#E8D860] font-bold text-lg mb-3">{inst.privacyTitle}</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {inst.privacy.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}
