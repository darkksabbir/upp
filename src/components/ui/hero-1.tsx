import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export function HeroSection() {
    return (
        <section className="mx-auto w-full max-w-5xl">
            {/* Top Shades */}
            {/* top radial gradient removed as requested */}

            {/* X Bold Faded Borders */}
            <div
                aria-hidden="true"
                className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
            >
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-white/40" />
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-white/40" />
            </div>

            {/* main content */}

            <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
                {/* X Content Faded Borders */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-1 size-full overflow-hidden"
                >
                    <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-white/40 to-white/40 md:left-8" />
                    <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-white/40 to-white/40 md:right-8" />
                    <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-white/20 to-white/20 md:left-12" />
                    <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-white/20 to-white/20 md:right-12" />
                </div>

                <a
                    className={cn(
                        "group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm",
                        "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
                    )}
                    href="#link"
                >
                    <RocketIcon className="size-3 text-white/60" />
                    <span className="text-xs text-white/90">shipped new features!</span>
                    <span className="block h-5 border-l border-white/10" />

                    <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
                </a>

                <h1
                    className={cn(
                        "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl"
                    )}
                >
                    Building Teams Help <br /> You Scale and Lead
                </h1>

                <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base text-white/70 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
                    Connecting you with world-class talent <br /> to scale, innovate and
                    lead
                </p>

                <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
                    <Button className="rounded-full" size="lg" variant="secondary">
                        <PhoneCallIcon data-icon="inline-start" className="size-4 mr-2" />{" "}
                        Book a Call
                    </Button>
                    <Button className="rounded-full " size="lg">
                        Get started{" "}
                        <ArrowRightIcon
                            className="size-4 ms-2" data-icon="inline-end" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function LogosSection() {
    return (
        <section className="relative space-y-4 border-t pt-6 pb-10">
            <h2 className="text-center font-medium text-lg text-white/60 tracking-tight md:text-xl">
                Trusted by <span className="text-white">experts</span>
            </h2>
            <div className="relative z-10 mx-auto max-w-4xl">
                <LogoCloud logos={logos} />
            </div>
        </section>
    );
}

const logos = [
    {
        src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
        alt: "Nvidia Logo",
    },
    {
        src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
        alt: "Supabase Logo",
    },
    {
        src: "https://storage.efferd.com/logo/openai-wordmark.svg",
        alt: "OpenAI Logo",
    },
    {
        src: "https://storage.efferd.com/logo/turso-wordmark.svg",
        alt: "Turso Logo",
    },
    {
        src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
        alt: "Vercel Logo",
    },
    {
        src: "https://storage.efferd.com/logo/github-wordmark.svg",
        alt: "GitHub Logo",
    },
    {
        src: "https://storage.efferd.com/logo/claude-wordmark.svg",
        alt: "Claude AI Logo",
    },
    {
        src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
        alt: "Clerk Logo",
    },
];
