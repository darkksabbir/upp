"use client";
import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: i * 0.12, duration: 0.7 },
        }),
        hidden: { filter: "blur(10px)", y: 40, opacity: 0 },
    };

    return (
        <section
            className="py-24 sm:py-36 px-4 bg-black relative overflow-hidden border-t border-white/10"
            ref={sectionRef}
        >
            {/* radial glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
                <TimelineContent
                    as="span"
                    animationNum={0}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-xs text-white/40 uppercase tracking-widest border border-white/15 px-4 py-1.5 rounded-full"
                >
                    Let's build together
                </TimelineContent>

                <TimelineContent
                    as="h2"
                    animationNum={1}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white !leading-[110%]"
                >
                    Ready to make your brand{" "}
                    <span className="text-white border border-white/20 inline-flex items-center h-12 md:h-16 border-dotted px-3 rounded-md bg-white/5 backdrop-blur-sm -my-1">
                        unforgettable?
                    </span>
                </TimelineContent>

                <TimelineContent
                    as="p"
                    animationNum={2}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-white/50 text-base sm:text-lg max-w-lg"
                >
                    Book a free strategy call. No pitch decks, no BS — just an honest conversation about where your brand is going.
                </TimelineContent>

                <TimelineContent
                    as="div"
                    animationNum={3}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="flex flex-col sm:flex-row gap-3 items-center"
                >
                    <Button className="rounded-full h-12 px-8 bg-white text-black hover:bg-white/90 text-base font-medium" size="lg">
                        <PhoneCallIcon className="size-4 mr-2" />
                        Book a Free Call
                    </Button>
                    <Button variant="ghost" className="rounded-full h-12 px-8 text-white/70 hover:text-white hover:bg-white/10 text-base font-medium" size="lg">
                        See our work <ArrowRightIcon className="size-4 ml-2" />
                    </Button>
                </TimelineContent>
            </div>
        </section>
    );
}
