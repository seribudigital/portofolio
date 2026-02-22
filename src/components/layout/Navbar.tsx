"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollDirection, scrollY } = useScrollDirection();

    const isHidden = scrollDirection === "down" && scrollY > 100;
    const isScrolled = scrollY > 50;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isHidden ? -100 : 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${isScrolled
                ? "border-b border-border bg-background/80 backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/#home"
                    className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
                >
                    {siteConfig.name}
                    <span className="text-accent">.</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 md:flex">
                    {siteConfig.navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-foreground"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-0.5 w-6 bg-foreground"
                    />
                    <motion.span
                        animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 w-6 bg-foreground"
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
                    >
                        <ul className="flex flex-col gap-4 px-6 py-6">
                            {siteConfig.navLinks.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-lg font-medium text-muted transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
