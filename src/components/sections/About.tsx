"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";

const services = [
    {
        icon: "🌐",
        title: "Web Development",
        subtitle: "Arsitektur Web yang Responsif",
        description:
            "Kami membangun website dan aplikasi web dengan arsitektur modern yang responsif di setiap perangkat. Dari landing page hingga platform kompleks, setiap baris kode ditulis untuk performa, skalabilitas, dan pengalaman pengguna terbaik.",
    },
    {
        icon: "🤖",
        title: "AI Content Creation",
        subtitle: "Visual Masa Depan dengan AI",
        description:
            "Manfaatkan kekuatan Artificial Intelligence untuk menghasilkan konten visual berkualitas tinggi. Dari desain grafis, mockup produk, hingga aset branding — kami menggunakan teknologi AI terdepan untuk mewujudkan visi kreatif Anda dengan cepat dan presisi.",
    },
    {
        icon: "🎓",
        title: "Education Systems",
        subtitle: "Digitalisasi Ekosistem Pendidikan",
        description:
            "Kami merancang dan mengembangkan sistem digital untuk institusi pendidikan: website sekolah, platform pendaftaran online, sistem manajemen data siswa, dan portal informasi yang terintegrasi untuk memudahkan operasional akademik.",
    },
    {
        icon: "⚡",
        title: "Business Automation",
        subtitle: "Efisiensi Tanpa Batas",
        description:
            "Otomatisasi proses bisnis Anda dengan solusi digital yang cerdas. Dari chatbot, sistem CRM, workflow otomatis, hingga integrasi API — kami membantu bisnis Anda berjalan lebih efisien sehingga Anda bisa fokus pada pertumbuhan.",
    },
];

export default function Services() {
    return (
        <SectionWrapper id="services">
            {/* Section Header */}
            <div className="mb-16 text-center">
                <span className="text-sm font-medium tracking-widest text-accent uppercase">
                    Layanan Kami
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Solusi Digital untuk Bisnis Anda
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted">
                    Empat pilar layanan yang dirancang untuk membawa transformasi digital
                    yang nyata dan terukur bagi bisnis Anda.
                </p>
            </div>

            {/* Services Grid — 4 Columns */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <Card key={service.title}>
                        <div className="text-4xl">{service.icon}</div>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                            {service.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent">
                            {service.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                            {service.description}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
