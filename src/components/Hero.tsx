import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroProps {
    title: string;
    variant?: "home" | "default";
    className?: string; // Allow extra styling overrides if needed
}

export default function Hero({ title, variant = "default", className }: HeroProps) {
    const isHome = variant === "home";

    return (
        <section
            className={cn(
                "relative w-full overflow-hidden bg-[#D8D8D8] flex flex-col justify-center",
                isHome ? "h-screen" : "h-[70vh] min-h-[500px]",
                className
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/banner_hero.jpg"
                    alt="Hero Banner"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlays - Consistent for all pages */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <h1 className="text-6xl font-bold tracking-tighter text-white font-copperplate w-[60%]">
                    {title}
                </h1>
            </div>
        </section>
    );
}
