"use client";
import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";

const steps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        description:
            "We start by deeply understanding your brand, audience, competitors, and goals. Then we map a clear path to growth.",
    },
    {
        num: "02",
        title: "Concept & Design",
        description:
            "Our creative team develops bold, original concepts that are both visually stunning and strategically sound.",
    },
    {
        num: "03",
        title: "Build & Launch",
        description:
            "We execute with precision — campaigns, content, code, or whatever the strategy demands — and launch with intent.",
    },
    {
        num: "04",
        title: "Measure & Scale",
        description:
            "Data loops back into strategy. We track what works, cut what doesn't, and double down to compound your results.",
    },
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: i * 0.1, duration: 0.7 },
        }),
        hidden: { filter: "blur(10px)", y: 30, opacity: 0 },
    };

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden" ref={sectionRef}>
            <div className="max-w-6xl mx-auto">
                <TimelineContent
                    as="h2"
                    animationNum={0}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4"
                >
                    How We Work
                </TimelineContent>
                <TimelineContent
                    as="p"
                    animationNum={1}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-white/50 text-base sm:text-lg max-w-xl mb-16"
                >
                    A repeatable, proven process that turns ambition into measurable outcomes.
                </TimelineContent>

                <div className="flex flex-col gap-0">
                    {steps.map((step, i) => (
                        <TimelineContent
                            key={step.num}
                            as="div"
                            animationNum={i + 2}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-white/10 py-10 group"
                        >
                            <span className="text-5xl sm:text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors leading-none shrink-0 w-20">
                                {step.num}
                            </span>
                            <div>
                                <h3 className="text-white font-semibold text-xl sm:text-2xl mb-3">{step.title}</h3>
                                <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl">{step.description}</p>
                            </div>
                        </TimelineContent>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    );
}
