import { Mail, Instagram, Facebook, Music } from "lucide-react";

export default function HistoryFooter() {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 px-6 md:px-12 border-t border-white/10">
            <div className="container mx-auto flex flex-col md:flex-row gap-12 justify-between mb-20">
                {/* Contact Info */}
                <div className="w-full md:w-1/3 space-y-6">
                    <h2 className="text-4xl font-bold">Contacto</h2>
                    <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className="space-y-4 pt-4">
                        <a href="mailto:user@gmail.com" className="flex items-center gap-3 text-sm font-medium hover:text-[#E8D860] transition-colors">
                            <Mail className="w-4 h-4" />
                            user@gmail.com
                        </a>
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Music className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                {/* Support Ticket Section - Dark/Gold Variant */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
                    <h3 className="text-2xl font-serif italic text-gray-200">Apoya este proyecto</h3>

                    <div className="relative w-full max-w-md h-40 bg-[#FFFBE6] text-black border-2 border-[#D4C46C] rounded-lg flex overflow-hidden shadow-lg hover:shadow-[#E8D860]/20 transition-shadow">
                        {/* Left Part */}
                        <div className="flex-1 p-4 flex flex-col justify-center border-r-2 border-dashed border-[#D4C46C] relative">
                            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9A8A40] mb-2">La Última Estación</div>
                            <div className="text-lg sm:text-xl font-black uppercase leading-tight">Súbete al tren</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-600 mt-1 leading-tight">
                                Tu apoyo le da vida a nuevas historias olvidadas y lleva esta historia a festivales.
                            </div>

                            {/* Punch holes - matching background color */}
                            <div className="absolute -top-3 -right-[9px] w-4 h-4 rounded-full bg-[#1A1A1A] border-b border-[#D4C46C]" />
                            <div className="absolute -bottom-3 -right-[9px] w-4 h-4 rounded-full bg-[#1A1A1A] border-t border-[#D4C46C]" />
                        </div>

                        {/* Right Part */}
                        <div className="w-1/3 flex flex-col items-center justify-center p-2 bg-[repeating-linear-gradient(45deg,#FFFBE6,#FFFBE6_10px,#FDF8E0_10px,#FDF8E0_20px)]">
                            <button className="bg-[#B05D30] text-white text-xs font-bold py-2 px-4 shadow hover:bg-[#904D20] transition-colors rotate-[-5deg] cursor-pointer">
                                APOYA<br />ESTE<br />VIAJE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-600 pt-8 border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} La Última Estación. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
