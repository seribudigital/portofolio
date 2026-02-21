export interface NavLink {
    label: string;
    href: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}
