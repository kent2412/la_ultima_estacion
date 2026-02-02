"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";

export default function TiendaPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen font-sans selection:bg-[#C8D15D] selection:text-black">
            <Navbar />
            <Hero title={t.pages.shop.title} />

            {/* Store Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider">
                        {t.pages.shop.title}
                    </h2>
                    <p className="text-xl text-white/60 uppercase tracking-widest">{t.pages.shop.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* First Items List */}
                    <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-serif text-[#E8D860]">{t.pages.shop.firstItemsTitle}</h3>
                        <ul className="space-y-6">
                            {t.pages.shop.firstItems.map((item, idx) => (
                                <li key={idx} className="space-y-1">
                                    <p className="font-bold text-white text-lg">{item.title}</p>
                                    {item.desc && <p className="text-white/60 text-sm">{item.desc}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Placeholder Grid (Visual only) */}
                    <div className="grid grid-cols-2 gap-4 opacity-50 pointer-events-none select-none relative">
                        {t.pages.shop.placeholderProducts.map((prod, idx) => (
                            <div key={idx} className="bg-white/5 p-4 rounded-xl space-y-3">
                                <div className="aspect-square bg-white/10 rounded-lg w-full"></div>
                                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                                <div className="h-3 bg-white/10 rounded w-1/2"></div>
                            </div>
                        ))}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-black/80 px-6 py-2 rounded-full text-[#E8D860] border border-[#E8D860] text-sm uppercase tracking-widest">
                                Coming May 2026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gear Up Section - Hidden */}
            {false && (
                <section className="py-24 bg-white/5 border-y border-white/10">
                    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider">
                                {t.pages.shop.gearUpTitle}
                            </h2>
                            <p className="text-xl text-white/60">{t.pages.shop.gearUpSubtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {t.pages.shop.featuredResources.map((res, idx) => (
                                <div key={idx} className="group relative aspect-[4/3] bg-black/40 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                                    {/* Placeholder content */}
                                    <div className="text-center space-y-4 p-6">
                                        <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-[#E8D860]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#E8D860] transition-colors">{res.title}</h3>
                                        <span className="inline-block text-sm text-[#E8D860] uppercase tracking-wider border-b border-[#E8D860] pb-0.5">
                                            {res.button}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Library Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#E8D860] uppercase tracking-wider">
                        {t.pages.shop.library.title}
                    </h2>
                    <h3 className="text-2xl font-serif text-white">{t.pages.shop.library.subtitle}</h3>
                    <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">{t.pages.shop.library.intro}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Support Org */}
                    <CategoryCard category={t.pages.shop.library.categories.support} />
                    {/* Legal */}
                    <CategoryCard category={t.pages.shop.library.categories.legal} />
                    {/* Community */}
                    <CategoryCard category={t.pages.shop.library.categories.community} />
                    {/* Literature */}
                    <CategoryCard category={t.pages.shop.library.categories.literature} />
                    {/* Podcasts */}
                    <CategoryCard category={t.pages.shop.library.categories.podcasts} />
                    {/* Apps */}
                    <CategoryCard category={t.pages.shop.library.categories.apps} />
                </div>

                <div className="text-center pt-12 border-t border-white/10">
                    <p className="text-white/40 text-sm italic max-w-2xl mx-auto whitespace-pre-line">
                        {t.pages.shop.disclaimer}
                    </p>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}

// Helper Component for Library Categories
function CategoryCard({ category }: { category: { title: string, items: any[] } }) {
    if (!category) return null;

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 hover:bg-white/10 transition-colors h-full">
            <h4 className="text-xl font-bold text-[#E8D860] min-h-[3.5rem] flex items-end pb-2 border-b border-white/10">
                {category.title}
            </h4>
            <ul className="space-y-6">
                {category.items.map((item: any, idx: number) => (
                    <li key={idx} className="space-y-2">
                        <div className="font-bold text-white">
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8D860] transition-colors flex items-center gap-2 group w-fit">
                                    {item.name}
                                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <span>{item.name}</span>
                            )}
                        </div>
                        {item.author && <p className="text-[#E8D860]/80 text-sm italic">by {item.author}</p>}
                        {item.platform && <p className="text-[#E8D860]/80 text-sm">On {item.platform}</p>}
                        {item.desc && <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>}
                        {item.phone && (
                            <a href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`} className="block text-sm text-[#E8D860] hover:underline mt-1 font-mono">
                                {item.phone}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
