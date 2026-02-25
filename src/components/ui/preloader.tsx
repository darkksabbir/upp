"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingMessages = [
    { text: "brewing bold ideas...", icon: "☕" },
    { text: "making it 10% cooler...", icon: "🧊" },
    { text: "adding unnecessary animations...", icon: "✨" },
    { text: "convincing the designer...", icon: "🎨" },
    { text: "final 20% (the hard part)...", icon: "📐" },
];

export default function Preloader() {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
        const duration = 2600; // total ms
        const steps = 100;
        const interval = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += 1;
            setProgress(current);

            // cycle messages based on progress
            setMsgIndex(Math.min(Math.floor(current / 22), loadingMessages.length - 1));

            if (current >= 100) {
                clearInterval(timer);
                setTimeout(() => setVisible(false), 400);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none"
                >
                    {/* Logo / brand name */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="mb-14 text-center"
                    >
                        <p className="text-white/30 text-xs uppercase tracking-[0.4em] mb-2">
                            a UPPEARANCE production
                        </p>
                        <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
                            UPP
                        </h1>
                    </motion.div>

                    {/* Animated message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="h-8 flex items-center mb-8"
                    >
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={msgIndex}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/50 text-sm font-medium text-center"
                            >
                                <span className="mr-2">{loadingMessages[msgIndex].icon}</span>
                                {loadingMessages[msgIndex].text}
                            </motion.p>
                        </AnimatePresence>
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0.5 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="w-48 sm:w-64 h-px bg-white/10 rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.05, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Percentage */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-3 text-white/20 text-xs font-mono"
                    >
                        {progress}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
