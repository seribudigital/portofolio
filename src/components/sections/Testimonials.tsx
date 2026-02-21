"use client";

import { motion, Variants } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const testimonials = [
    {
        id: 1,
        quote:
            "SeribuDigital berhasil mentransformasi cara kami memasarkan properti. Website yang mereka buat tidak hanya indah, tapi juga menghasilkan lead berkualitas tinggi.",
        name: "Harianto",
        role: "Owner, Griya Harianto Utama",
    },
    {
        id: 2,
        quote:
            "Sistem pendaftaran online yang dikembangkan oleh SeribuDigital sangat memudahkan operasional sekolah kami. Proses yang dulunya memakan waktu berhari-hari kini selesai dalam hitungan menit.",
        name: "Ustadz Ahmad",
        role: "Kepala Sekolah, Al-Khoir Islamic School",
    },
    {
        id: 3,
        quote:
            "Website baru kami memberikan kesan profesional yang luar biasa kepada pelanggan. Sejak hadir online, jumlah pelanggan baru meningkat secara signifikan.",
        name: "Sarah",
        role: "Manager, La Petite Laundry",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
};

export default function Testimonials() {
    return (
        <SectionWrapper id="testimonials">
            {/* Section Header */}
            <div className="mb-16 text-center">
                <span className="text-sm font-medium tracking-widest text-accent uppercase">
                    Testimoni
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Apa Kata Klien Kami
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted">
                    Kepuasan klien adalah prioritas utama kami. Berikut adalah beberapa
                    pengalaman dari klien yang telah bekerja sama dengan SeribuDigital.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((t, index) => (
                    <motion.blockquote
                        key={t.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.15 }}
                        className="group relative rounded-2xl border border-border bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/20 hover:bg-white/[0.04]"
                    >
                        {/* Large Quote Mark */}
                        <span className="absolute -top-2 left-6 text-7xl leading-none text-accent/15 select-none">
                            &ldquo;
                        </span>

                        {/* Quote Text */}
                        <p className="relative z-10 mt-4 text-base leading-relaxed text-foreground/80 italic">
                            &ldquo;{t.quote}&rdquo;
                        </p>

                        {/* Client Info */}
                        <div className="mt-6 flex items-center gap-3">
                            {/* Avatar placeholder */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">
                                    {t.name}
                                </p>
                                <p className="text-xs text-muted">{t.role}</p>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute right-0 bottom-0 left-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.blockquote>
                ))}
            </div>
        </SectionWrapper>
    );
}
