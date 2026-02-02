export default function AwardsSection() {
    return (
        <section className="bg-transparent py-20 px-4 md:px-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
                    Premios
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center justify-center">
                            <div className="w-full aspect-square md:aspect-[4/3] bg-[#D9D9D9] rounded opacity-80" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
