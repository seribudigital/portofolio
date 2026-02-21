"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/constants/site";

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <div className="text-center">
                <span className="text-sm font-medium tracking-widest text-accent uppercase">
                    Contact
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Let&apos;s Work Together
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted">
                    Have a project in mind? I&apos;d love to hear about it. Let&apos;s
                    connect and bring your ideas to life.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href={`mailto:${siteConfig.author.email}`}>
                        <Button variant="primary" size="lg">
                            Say Hello 👋
                        </Button>
                    </a>
                    <a
                        href={siteConfig.author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="secondary" size="lg">
                            View GitHub
                        </Button>
                    </a>
                </div>

                {/* Decorative Line */}
                <div className="mx-auto mt-16 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
        </SectionWrapper>
    );
}
