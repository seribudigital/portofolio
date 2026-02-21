"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/constants/projects";

const CATEGORIES = ["All", "Properti", "Edukasi", "Jasa"];

function getCategoryMatch(projectCategory: string, filter: string): boolean {
    if (filter === "All") return true;
    if (filter === "Properti") return projectCategory.includes("Properti");
    if (filter === "Edukasi") return projectCategory.includes("Edukasi");
    if (filter === "Jasa") return projectCategory.includes("Jasa") || projectCategory.includes("Produk");
    return false;
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = PROJECTS.filter((p) =>
        getCategoryMatch(p.category, activeFilter)
    );

    return (
        <SectionWrapper id="projects">
            {/* Section Header */}
            <div className="mb-12 text-center">
                <span className="text-sm font-medium tracking-widest text-accent uppercase">
                    Portfolio
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Proyek Terbaru Kami
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted">
                    Hasil karya nyata yang menunjukkan komitmen kami dalam membangun solusi
                    digital berkualitas tinggi untuk berbagai industri.
                </p>
            </div>

            {/* ── Category Filter ── */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${activeFilter === cat
                                ? "text-white"
                                : "text-muted hover:text-foreground"
                            }`}
                    >
                        {activeFilter === cat && (
                            <motion.span
                                layoutId="activeFilter"
                                className="absolute inset-0 rounded-full bg-accent"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                ))}
            </div>

            {/* ── Projects Grid with Layout Animation ── */}
            <LayoutGroup>
                <motion.div
                    layout
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    opacity: { duration: 0.3 },
                                    layout: { type: "spring", stiffness: 300, damping: 30 },
                                }}
                            >
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group block"
                                >
                                    <article className="relative overflow-hidden rounded-2xl border border-border bg-white/[0.02] transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-xl group-hover:shadow-accent/5">
                                        {/* Cover Area */}
                                        <div className="relative h-52 overflow-hidden sm:h-56">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out group-hover:scale-110`}
                                            />
                                            <div
                                                className="absolute inset-0 opacity-[0.05]"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                                                    backgroundSize: "40px 40px",
                                                }}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-7xl opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-60">
                                                    {project.icon}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/50">
                                                <span className="rounded-xl border border-accent/50 bg-accent/90 px-6 py-3 text-sm font-semibold text-white opacity-0 shadow-lg shadow-accent/20 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                                    Lihat Detail →
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                                                {project.title}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                                                {project.description}
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {project.details.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </LayoutGroup>
        </SectionWrapper>
    );
}
