"use client";
import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import {
    PenToolIcon,
    BarChart2Icon,
    MonitorIcon,
    MegaphoneIcon,
    VideoIcon,
    SearchIcon,
} from "lucide-react";

const services = [
    {
        icon: PenToolIcon,
        title: "Brand Identity",
        description:
            "We craft distinctive visual identities that communicate who you are before you say a word. Strategy-led, culture-informed.",
    },
    {
        icon: BarChart2Icon,
        title: "Growth Marketing",
        description:
            "Data-driven campaigns engineered for maximum ROI. We don't guess — we test, measure, and scale what works.",
    },
    {
        icon: MonitorIcon,
        title: "Web & Digital",
        description:
            "Conversion-optimized websites and digital experiences that turn visitors into customers, beautifully.",
    },
    {
        icon: MegaphoneIcon,
        title: "Social & Content",
        description:
            "Scroll-stopping content ecosystems built for your audience. Consistent, bold, and always on-brand.",
    },
    {
        icon: VideoIcon,
        title: "Video Production",
        description:
            "High-impact video content from concept to cut. From reels to brand films, we make your story move.",
    },
    {
        icon: SearchIcon,
        title: "SEO & Performance",
        description:
            "Organic authority that compounds over time. We build search presence that keeps delivering long after the campaign.",
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { delay: i * 0.08, duration: 0.6 },
        }),
        hidden: { filter: "blur(8px)", y: 30, opacity: 0 },
    };

    return (
        <section className="py-20 px-4 bg-black relative overflow-hidden" ref={sectionRef}>
            {/* subtle grid bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <TimelineContent
                    as="h2"
                    animationNum={0}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4"
                >
                    What We Do
                </TimelineContent>
                <TimelineContent
                    as="p"
                    animationNum={1}
                    timelineRef={sectionRef}
                    customVariants={revealVariants}
                    className="text-center text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-16"
                >
                    Every service we offer is built to move metrics that matter — attention, trust, and revenue.
                </TimelineContent>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <TimelineContent
                            key={service.title}
                            as="div"
                            animationNum={i + 2}
                            timelineRef={sectionRef}
                            customVariants={revealVariants}
                            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 group-hover:bg-white/15 transition-colors">
                                <service.icon className="size-5 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                        </TimelineContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
