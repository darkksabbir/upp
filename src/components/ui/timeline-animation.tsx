"use client";

import React from "react";
import { motion, useInView, Variant } from "framer-motion";

interface TimelineContentProps {
    as?: any;
    animationNum: number;
    timelineRef: React.RefObject<any>;
    customVariants?: {
        visible: (i: number) => Variant;
        hidden: Variant;
    };
    className?: string;
    children: React.ReactNode;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
    as: Component = "div",
    animationNum,
    timelineRef,
    customVariants,
    className,
    children,
}) => {
    const isInView = useInView(timelineRef, { once: true, margin: "-10% 0px" });

    const MotionComponent = motion[Component as keyof typeof motion] || motion.div;

    const defaultVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    const variants = customVariants || defaultVariants;

    return (
        <MotionComponent
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants as any}
            custom={animationNum}
            className={className}
        >
            {children}
        </MotionComponent>
    );
};
