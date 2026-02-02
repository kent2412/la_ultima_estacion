"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsGrid() {
    const { t } = useLanguage();
    const images = ["/gallery-1.png", "/inspiration.png", "/blooper-1.png", "/gallery-2.png"];

    return (
        <section className="bg-transparent py-20 px-4 md:px-12">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        {t.pages.shop.gridTitle}
                    </h2>
                    <button className="hidden md:flex text-gray-500 hover:text-white transition-colors items-center gap-2 text-sm">
                        {t.pages.shop.viewShop} <ArrowRight className="w-4 h-4" />
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.data.products.map((product, idx) => (
                        <div key={idx} className="bg-[#2A2A2A] group cursor-pointer overflow-hidden rounded-lg">
                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={images[idx] || "/inspiration.png"}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-white font-bold text-lg mb-2">{product.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {product.description}
                                </p>
                                <span className="text-[#C8D15D] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    {t.pages.shop.viewShop} <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
