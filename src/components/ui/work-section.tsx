"use client";
import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { ArrowUpRightIcon } from "lucide-react";

const projects = [
    {
        category: "Brand Identity",
        title: "NovaDrive Automotive",
        description:
            "Full brand overhaul for an EV startup entering a crowded market. Result: 280% increase in brand recall within 3 months.",
        tags: ["Identity", "Web", "Campaign"],
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop",
    },
    {
        category: "Growth Marketing",
        title: "Meridian Wellness",
        description:
            "Performance marketing suite that drove a 4.1× ROAS across paid social and search channels in the first quarter.",
        tags: ["Paid Social", "SEO", "Analytics"],
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    },
    {
        category: "Web & Content",
        title: "Apex Capital",
        description:
            "High-trust digital experience for a private equity firm that cut bounce rate by 54% and tripled inbound leads.",
        tags: ["Web", "Content", "Video"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
    },
];

export default function WorkSection() {
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
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
                    <TimelineContent
                        as="h2"
                        animationNum={0}
                        timelineRef={sectionRef}
                        customVariants={revealVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
                    >
                        Selected Work
                    </TimelineContent>
                    <TimelineContent
                        as="a"
                        animationNum={1}
                        timelineRef={sectionRef}
                        customVariants={revealVariants}
                        className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors pb-1 border-b border-white/20 hover:border-white/60 w-fit shrink-0"
                    >
                        View all work <ArrowUpRightIcon className="size-3.5" />
                    </TimelineContent>
                </div>

                <div className="flex flex-col gap-8">
                    {projects.map((project, i) => (
                        <TimelineContent
                            key={project.title}
                            as="div"
                            animationNum={i + 2}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4">{project.title}</h3>
                                        <p className="text-white/50 text-sm sm:text-base leading-relaxed">{project.description}</p>
                                    </div>
                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs text-white/60 border border-white/15 px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TimelineContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
