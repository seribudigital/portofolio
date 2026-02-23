"use client";

import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/constants/site";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
};

import HeroCanvas from "@/components/ui/HeroCanvas";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
            {/* Neural Network Canvas Background */}
            <HeroCanvas />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-4xl text-center"
            >
                {/* Badge */}
                <motion.div variants={itemVariants}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                        Digital Agency
                    </span>
                </motion.div>

                {/* Brand Name */}
                <motion.h1
                    variants={itemVariants}
                    className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    <span className="gradient-text">{siteConfig.name}</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="mx-auto mt-4 max-w-2xl text-lg font-medium text-foreground/80 sm:text-xl"
                >
                    {siteConfig.tagline}
                </motion.p>

                {/* Sub-headline */}
                <motion.p
                    variants={itemVariants}
                    className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
                >
                    Kami menggabungkan desain web mutakhir dengan kekuatan AI untuk
                    membangun pengalaman digital yang fungsional, estetik, dan berdampak
                    bagi bisnis Anda.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <a href="#services">
                        <Button variant="primary" size="lg">
                            Lihat Layanan
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button variant="secondary" size="lg">
                            Hubungi Kami
                        </Button>
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div variants={itemVariants} className="mt-20">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
                    >
                        <motion.div className="h-2 w-1 rounded-full bg-accent" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
