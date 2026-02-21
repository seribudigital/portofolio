import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import CaseStudyContent from "./CaseStudyContent";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} — SeribuDigital`,
        description: project.description,
        openGraph: {
            title: `${project.title} — SeribuDigital`,
            description: project.description,
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <CaseStudyContent project={project} />;
}
