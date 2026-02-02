import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ResourcesSection() {
    return (
        <section className="bg-transparent py-20 px-4 md:px-12">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Equípate para tu viaje
                    </h2>
                    <p className="text-gray-400">
                        Recursos gratuitos para cuidadores
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Resource Card 1 */}
                    <div className="bg-[#2A2A2A] p-8 md:p-12 rounded-lg relative overflow-visible group">
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            {/* Book Image (Overlapping left) */}
                            <div className="w-40 md:w-48 shrink-0 relative">
                                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full" />
                                <div className="relative aspect-[3/4] rotate-[-6deg] transform group-hover:rotate-0 transition-transform duration-500 origin-bottom-left shadow-2xl">
                                    <div className="absolute inset-0 bg-white rounded-r-md rounded-l-sm shadow-inner overflow-hidden border-l-4 border-gray-300">
                                        {/* Mockup content */}
                                        <div className="h-full w-full bg-[#E5E5E5]" />
                                    </div>
                                    {/* Spine effect */}
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-gray-400 to-gray-200" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Nombre del Recurso</h3>
                                <button className="text-[#C8D15D] text-sm font-bold flex items-center justify-center md:justify-start gap-2 hover:underline">
                                    Descargar <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Resource Card 2 */}
                    <div className="bg-[#2A2A2A] p-8 md:p-12 rounded-lg relative overflow-visible group">
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            {/* Book Image */}
                            <div className="w-40 md:w-48 shrink-0 relative">
                                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full" />
                                <div className="relative aspect-[3/4] rotate-[-6deg] transform group-hover:rotate-0 transition-transform duration-500 origin-bottom-left shadow-2xl">
                                    <div className="absolute inset-0 bg-white rounded-r-md rounded-l-sm shadow-inner overflow-hidden border-l-4 border-gray-300">
                                        {/* Mockup content */}
                                        <div className="h-full w-full bg-[#E5E5E5]" />
                                    </div>
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-gray-400 to-gray-200" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Nombre del Recurso</h3>
                                <button className="text-[#C8D15D] text-sm font-bold flex items-center justify-center md:justify-start gap-2 hover:underline">
                                    Descargar <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Nav */}
                <div className="flex justify-center gap-8 mt-12 text-gray-500 text-sm font-medium">
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Prev
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        Next <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
