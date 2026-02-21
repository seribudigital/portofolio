import { siteConfig } from "@/constants/site";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border px-6 py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <a
                        href="/#home"
                        className="text-lg font-bold tracking-tight text-foreground"
                    >
                        {siteConfig.name}
                        <span className="text-accent">.</span>
                    </a>
                    <p className="mt-1 text-sm text-muted">
                        {siteConfig.tagline}
                    </p>
                </div>

                {/* Links — smooth scroll to homepage sections */}
                <ul className="flex items-center gap-6">
                    {siteConfig.navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={`/${link.href}`}
                                className="text-sm text-muted transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Copyright */}
                <p className="text-sm text-muted">
                    &copy; {currentYear} {siteConfig.name}
                </p>
            </div>
        </footer>
    );
}
