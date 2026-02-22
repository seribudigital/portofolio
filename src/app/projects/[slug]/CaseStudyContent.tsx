"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PageTransition from "@/components/ui/PageTransition";
import { Project } from "@/constants/projects";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

interface Props {
    project: Project;
}

export default function CaseStudyContent({ project }: Props) {
    return (
        <PageTransition>
            <article className="px-6 pt-28 pb-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-6xl">
                    {/* ── Back Button ── */}
                    <Link
                        href="/#projects"
                        className="group mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-muted backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                        >
                            <path
                                d="M10 12L6 8L10 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Kembali ke Proyek
                    </Link>
                    {/* ── Hero Cover ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
                    >
                        <div className="flex items-center justify-center" style={{ maxHeight: '400px' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-contain"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>
                    </motion.div>

                    {/* ── Main Content: Sidebar + Narrative ── */}
                    <div className="mt-12 flex flex-col gap-12 lg:flex-row">
                        {/* ── Sticky Sidebar ── */}
                        <motion.aside
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="lg:sticky lg:top-28 lg:h-fit lg:w-72 lg:shrink-0"
                        >
                            <div className="rounded-2xl border border-border bg-white/[0.02] p-6 backdrop-blur-sm">
                                <h3 className="mb-6 text-xs font-semibold tracking-widest text-muted uppercase">
                                    Info Proyek
                                </h3>

                                <div className="space-y-5">
                                    <div>
                                        <p className="text-xs text-muted">Kategori</p>
                                        <p className="mt-1 text-sm font-medium text-foreground">
                                            {project.category}
                                        </p>
                                    </div>
                                    <div className="h-px bg-border" />

                                    <div>
                                        <p className="text-xs text-muted">Client</p>
                                        <p className="mt-1 text-sm font-medium text-foreground">
                                            {project.title}
                                        </p>
                                    </div>
                                    <div className="h-px bg-border" />

                                    <div>
                                        <p className="text-xs text-muted">Tahun</p>
                                        <p className="mt-1 text-sm font-medium text-foreground">
                                            2024 — 2025
                                        </p>
                                    </div>
                                    <div className="h-px bg-border" />

                                    <div>
                                        <p className="text-xs text-muted">Tech Stack</p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {project.details.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar CTA */}
                                <div className="mt-8">
                                    <Link href="/#contact">
                                        <Button variant="primary" size="md" className="w-full">
                                            Diskusikan Proyek
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.aside>

                        {/* ── Narrative Content ── */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                            className="min-w-0 flex-1"
                        >
                            {/* Title */}
                            <motion.div variants={fadeUp}>
                                <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
                                    {project.category}
                                </span>
                                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                                    {project.details.headline}
                                </h1>
                                <p className="mt-4 text-lg leading-relaxed text-muted">
                                    {project.description}
                                </p>
                            </motion.div>

                            {/* Divider */}
                            <motion.div
                                variants={fadeUp}
                                className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                            />

                            {/* Tantangan */}
                            <motion.div variants={fadeUp}>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-lg">
                                        🎯
                                    </span>
                                    <h2 className="text-2xl font-bold">Tantangan</h2>
                                </div>
                                <p className="mt-4 leading-relaxed text-muted">
                                    {project.details.challenge}
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                            />

                            {/* Solusi */}
                            <motion.div variants={fadeUp}>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-lg">
                                        💡
                                    </span>
                                    <h2 className="text-2xl font-bold">Solusi</h2>
                                </div>
                                <p className="mt-4 leading-relaxed text-muted">
                                    {project.details.solution}
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                            />

                            {/* Hasil */}
                            <motion.div variants={fadeUp}>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-lg">
                                        🚀
                                    </span>
                                    <h2 className="text-2xl font-bold">Hasil</h2>
                                </div>
                                <p className="mt-4 leading-relaxed text-muted">
                                    {project.details.result}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ── Bottom CTA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-20 rounded-2xl border border-border bg-white/[0.02] p-8 text-center sm:p-12"
                    >
                        <h3 className="text-2xl font-bold">
                            Tertarik dengan solusi serupa?
                        </h3>
                        <p className="mx-auto mt-3 max-w-lg text-muted">
                            Kami siap membantu Anda membangun pengalaman digital yang
                            fungsional dan berdampak bagi bisnis Anda.
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/#contact">
                                <Button variant="primary" size="lg">
                                    Hubungi Kami
                                </Button>
                            </Link>
                            <Link href="/#projects">
                                <Button variant="secondary" size="lg">
                                    Lihat Proyek Lain
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </article>
        </PageTransition>
    );
}
