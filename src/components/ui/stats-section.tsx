"use client";
import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";

const stats = [
    { value: "150+", label: "Brands Transformed" },
    { value: "3.8×", label: "Average Revenue Growth" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "12M+", label: "Content Views Generated" },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: i * 0.1, duration: 0.7 },
        }),
        hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
    };

    return (
        <section
            className="py-20 px-4 bg-black relative overflow-hidden border-t border-white/10"
            ref={sectionRef}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
                    {stats.map((stat, i) => (
                        <TimelineContent
                            key={stat.label}
                            as="div"
                            animationNum={i}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="bg-black px-6 py-10 sm:py-14 flex flex-col items-center justify-center text-center gap-2"
                        >
                            <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{stat.value}</span>
                            <span className="text-white/50 text-sm sm:text-base font-medium uppercase tracking-widest">{stat.label}</span>
                        </TimelineContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
