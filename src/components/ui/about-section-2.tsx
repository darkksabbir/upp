"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap } from "lucide-react";
import { useRef } from "react";

export default function AboutSection2() {
    const heroRef = useRef<HTMLDivElement>(null);
    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.1, // Adjusted delay for smoother flow in a dark theme landing page
                duration: 0.7,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: 40,
            opacity: 0,
        },
    };
    const textVariants = {
        visible: (i: number) => ({
            filter: "blur(0px)",
            opacity: 1,
            transition: {
                delay: i * 0.1, // Adjusted delay
                duration: 0.7,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            opacity: 0,
        },
    };
    return (
        <section className="py-20 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10" ref={heroRef}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Right side - Content */}
                    <div className="flex-1">
                        <TimelineContent
                            as="h1"
                            animationNum={0}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            className="sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-semibold text-white mb-8"
                        >
                            We are{" "}
                            <TimelineContent
                                as="span"
                                animationNum={1}
                                timelineRef={heroRef}
                                customVariants={textVariants}
                                className="text-white border border-white/20 inline-flex items-center h-10 md:h-16 border-dotted px-2 rounded-md bg-white/5 backdrop-blur-sm -my-1"
                            >
                                rethinking
                            </TimelineContent>{" "}
                            creative marketing to be more disruptive and always vision-first. Our
                            goal is to continually raise the bar and{" "}
                            <TimelineContent
                                as="span"
                                animationNum={2}
                                timelineRef={heroRef}
                                customVariants={textVariants}
                                className="text-white border border-white/20 inline-flex items-center h-10 md:h-16 border-dotted px-2 rounded-md bg-white/5 backdrop-blur-sm -my-1"
                            >
                                challenge
                            </TimelineContent>{" "}
                            how your brand could{" "}
                            <TimelineContent
                                as="span"
                                animationNum={3}
                                timelineRef={heroRef}
                                customVariants={textVariants}
                                className="text-white border border-white/20 inline-flex items-center h-10 md:h-16 border-dotted px-2 rounded-md bg-white/5 backdrop-blur-sm -my-1"
                            >
                                scale with you.
                            </TimelineContent>
                        </TimelineContent>

                        <div className="mt-12 flex gap-2 justify-between items-end">
                            <TimelineContent
                                as="div"
                                animationNum={4}
                                timelineRef={heroRef}
                                customVariants={textVariants}
                                className="mb-4 sm:text-xl text-lg"
                            >
                                <div className=" font-normal text-white/50 mb-0.5 capitalize">
                                    We are UPPEARANCE and we will
                                </div>
                                <div className=" text-white/80 font-medium uppercase tracking-widest text-xs">
                                    take you further
                                </div>
                            </TimelineContent>

                            <TimelineContent
                                as="button"
                                animationNum={5}
                                timelineRef={heroRef}
                                customVariants={textVariants}
                                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white h-12 px-6 rounded-full text-base inline-flex items-center cursor-pointer transition-colors backdrop-blur-sm whitespace-nowrap"
                            >
                                <Zap fill="currentColor" size={12} className="mr-1.5 shrink-0" />
                                <span className="hidden sm:inline">About UPPEARANCE</span>
                                <span className="sm:hidden">About Upp</span>
                            </TimelineContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
