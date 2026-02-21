"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
};

export default function SectionWrapper({
    children,
    id,
    className = "",
    delay = 0,
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            transition={{ delay }}
            className={`px-6 py-20 md:px-12 lg:px-24 ${className}`}
        >
            <div className="mx-auto max-w-6xl">{children}</div>
        </motion.section>
    );
}
