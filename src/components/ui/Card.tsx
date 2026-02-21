"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    /* ── Motion values for cursor tracking ── */
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    /* ── Spring-smoothed tilt values ── */
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
        stiffness: 200,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
        stiffness: 200,
        damping: 20,
    });

    /* ── Glow position follows cursor ── */
    const glowX = useTransform(mouseX, [0, 1], [0, 100]);
    const glowY = useTransform(mouseY, [0, 1], [0, 100]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 800,
            }}
            className={`group relative rounded-2xl p-[1px] transition-shadow duration-500 ${className}`}
        >
            {/* ── Hover Border Glow ── */}
            <motion.div
                className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: isHovered
                        ? `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(0,112,243,0.5) 0%, rgba(0,112,243,0.1) 40%, transparent 70%)`
                        : "none",
                    border: "1px solid rgba(0,112,243,0.3)",
                }}
            />

            {/* ── Card Inner ── */}
            <div className="relative z-10 rounded-2xl border border-border bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-white/[0.05]">
                {children}
            </div>
        </motion.div>
    );
}
