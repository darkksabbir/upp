"use client";

/**
 * A floating 3D-style abstract sphere / orb that adds a visually premium
 * element to sections. Uses pure CSS + Tailwind gradients.
 */
export default function FloatingOrb({
    size = 320,
    className = "",
}: {
    size?: number;
    className?: string;
}) {
    return (
        <div
            className={`relative select-none pointer-events-none ${className}`}
            style={{ width: size, height: size }}
        >
            {/* Outer glow pulse */}
            <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                    background:
                        "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 70%)",
                }}
            />

            {/* Core sphere */}
            <div
                className="absolute inset-4 rounded-full animate-float"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.02) 70%, transparent 100%)",
                    boxShadow:
                        "inset -8px -8px 24px rgba(0,0,0,0.8), inset 4px 4px 12px rgba(255,255,255,0.15)",
                    backdropFilter: "blur(1px)",
                }}
            />

            {/* Specular highlight */}
            <div
                className="absolute rounded-full"
                style={{
                    width: size * 0.28,
                    height: size * 0.18,
                    top: "22%",
                    left: "22%",
                    background:
                        "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 100%)",
                    transform: "rotate(-30deg)",
                    filter: "blur(2px)",
                }}
            />

            {/* Equator ring */}
            <div
                className="absolute inset-0 rounded-full border border-white/8"
                style={{
                    transform: "rotateX(75deg)",
                }}
            />

            {/* Subtle concentric ring 1 */}
            <div
                className="absolute rounded-full border border-white/5 animate-float-slow"
                style={{
                    width: size * 1.2,
                    height: size * 1.2,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
            {/* Subtle concentric ring 2 */}
            <div
                className="absolute rounded-full border border-white/3"
                style={{
                    width: size * 1.5,
                    height: size * 1.5,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
        </div>
    );
}
