"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

const features = [
    {
        title: "Perangkat Ajar Pintar",
        description: "Modul ajar instan standar Kurikulum Merdeka.",
        icon: "📚",
    },
    {
        title: "Generator Evaluasi HOTS",
        description: "Susun soal dan rubrik penilaian otomatis.",
        icon: "🧠",
    },
    {
        title: "Jurnal Mengajar Otomatis",
        description: "Laporan pedagogik otomatis dari catatan harian.",
        icon: "📝",
    },
    {
        title: "Smart Grader (AI Vision)",
        description: "Koreksi esai & LJK via kamera HP.",
        icon: "📸",
    },
    {
        title: "Learning Analytics",
        description: "Analisis agregat kelemahan topik siswa.",
        icon: "📊",
    },
];

const badges = [
    "Next.js",
    "Tailwind CSS",
    "Google Gemini 2.5 Flash",
    "Vercel",
];

export default function CogniEduHighlight() {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <SectionWrapper id="cogniedu-highlight" className="py-24 overflow-hidden relative">
            {/* Background subtle glowing accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-12 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">
                        Featured Prestigious Project
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[family-name:var(--font-montserrat)] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                        CogniEdu
                    </h2>
                    <p className="mt-4 text-xl text-muted font-medium max-w-2xl mx-auto">
                        Mengubah Berjam-jam Beban Administrasi Guru Menjadi Hitungan Detik.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="group relative max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-black/40 p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden"
                onMouseMove={handleMouseMove}
                style={{ perspective: 1000 }}
            >
                {/* Glow following cursor effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                rgba(59, 130, 246, 0.15),
                                transparent 80%
                            )
                        `,
                    }}
                />

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content Column */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    EdTech SaaS
                                </span>
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                    AI Web Application
                                </span>
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Live on Vercel
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
                                AI Teaching Assistant <br />
                                <span className="text-xl font-medium text-foreground/80 mt-2 block font-sans">
                                    Otak Tambahan untuk Para Pendidik
                                </span>
                            </h3>

                            <p className="text-muted leading-relaxed">
                                Di era Kurikulum Merdeka, CogniEdu hadir sebagai Otak Tambahan untuk para pendidik. Dibangun dengan arsitektur web modern dan ditenagai oleh Kecerdasan Buatan Multimodal, CogniEdu mengotomatisasi pembuatan perangkat ajar hingga koreksi nilai berbasis AI Vision.
                            </p>
                        </div>

                        {/* Impact Statement */}
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 relative overflow-hidden group/impact">
                            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover/impact:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-200"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            </div>
                            <p className="text-lg font-semibold text-blue-100 italic relative z-10">
                                "Mereduksi 80% waktu administrasi dan meningkatkan kualitas asesmen secara terukur."
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl shadow-inner">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-xs text-muted leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-sm font-medium text-muted mb-3">Teknologi di balik CogniEdu:</p>
                            <div className="flex flex-wrap gap-2">
                                {badges.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Mockup Column (Tilt Effect) */}
                    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end xl:translate-x-8">
                        <motion.div
                            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative w-full max-w-lg aspect-[16/10] rounded-xl bg-[#0f1015] border-[6px] border-[#1d1e24] shadow-2xl overflow-hidden will-change-transform z-10"
                        >
                            {/* Browser/Laptop Mockup Header */}
                            <div className="h-6 bg-[#1d1e24] w-full flex items-center px-3 gap-1.5 border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                <div className="mx-auto h-3 w-1/3 bg-white/5 rounded-full hidden sm:block"></div>
                            </div>

                            {/* Actual Project Screenshot */}
                            <div className="w-full h-[calc(100%-1.5rem)] relative bg-black flex overflow-hidden">
                                <img
                                    src="https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/cogniedu-screenshot.webp"
                                    alt="CogniEdu AI Dashboard"
                                    className="absolute inset-0 w-full h-full object-cover object-top z-20"
                                />

                                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
                                    <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white font-medium text-sm backdrop-blur-md">
                                        Live Dashboard Preview
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements behind/around the mockup */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-2xl border border-blue-500/30 blur-sm z-0"
                        />
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full border border-purple-500/30 blur-sm z-0"
                        />
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
