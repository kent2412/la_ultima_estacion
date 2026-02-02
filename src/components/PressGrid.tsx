import Image from "next/image";

const articles = [
    {
        id: 1,
        title: "Articulo",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/gallery-1.png", // Placeholder
        type: "Articulo"
    },
    {
        id: 2,
        title: "Nota de prensa",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/inspiration.png", // Placeholder
        type: "Nota de prensa"
    },
    {
        id: 3,
        title: "Artículo",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/gallery-2.png", // Placeholder
        type: "Artículo"
    }
];

export default function PressGrid() {
    return (
        <section className="bg-transparent py-16 px-4 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
                    Notas de prensa y artículos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-[#E8D860]/50 transition-colors">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <span className="text-[#E8D860] text-sm font-semibold uppercase tracking-wider">
                                    {item.title} {/* Title used as 'Type' visually based on design */}
                                </span>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
