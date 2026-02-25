"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingOrb from "@/components/ui/floating-orb";

export default function CtaSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

    const variants = {
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
        }),
    };

    return (
        <section
            className="py-24 sm:py-36 px-4 bg-black relative overflow-hidden border-t border-white/10"
            ref={sectionRef}
        >
            {/* Floating orb background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <FloatingOrb size={480} />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
                <motion.span
                    variants={variants}
                    custom={0}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-xs text-white/40 uppercase tracking-widest border border-white/15 px-4 py-1.5 rounded-full"
                >
                    Let&apos;s build together
                </motion.span>

                <motion.h2
                    variants={variants}
                    custom={1}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white !leading-[110%]"
                >
                    Ready to make your brand{" "}
                    <span className="text-white border border-white/20 inline-flex items-center h-12 md:h-16 border-dotted px-3 rounded-md bg-white/5 backdrop-blur-sm -my-1">
                        unforgettable?
                    </span>
                </motion.h2>

                <motion.p
                    variants={variants}
                    custom={2}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-white/50 text-base sm:text-lg max-w-lg"
                >
                    Book a free strategy call. No pitch decks, no BS — just an honest conversation about where your brand is going.
                </motion.p>

                <motion.div
                    variants={variants}
                    custom={3}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col sm:flex-row gap-3 items-center"
                >
                    <Button className="rounded-full h-12 px-8 bg-white text-black hover:bg-white/90 text-base font-medium" size="lg">
                        <PhoneCallIcon className="size-4 mr-2" />
                        Book a Free Call
                    </Button>
                    <Button variant="ghost" className="rounded-full h-12 px-8 text-white/70 hover:text-white hover:bg-white/10 text-base font-medium" size="lg">
                        See our work <ArrowRightIcon className="size-4 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
