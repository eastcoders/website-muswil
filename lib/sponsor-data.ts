// Sponsor Data Store with Tiered Hierarchy
// Tier 1: Main Sponsor (1) - Visible everywhere, clickable to Instagram
// Tier 2: Gold Sponsors (4) - Visible in sponsors section, prominent
// Tier 3: Supporting Sponsors - Visible in sponsors section, smaller
// Media Partners - Visible at bottom of sponsors section

export interface Sponsor {
    id: string;
    name: string;
    shortName?: string;
    tier: 1 | 2 | 3 | 'media';
    logoPath: string;
    imageClassName?: string;
    instagramUrl?: string;
    // Legacy fields for fallback (if no logo)
    gradientFrom?: string;
    gradientTo?: string;
    icon?: string;
}

// Tier 1 - Main Sponsor (1)
export const mainSponsor: Sponsor = {
    id: "biznet",
    name: "Biznet",
    shortName: "BIZNET",
    tier: 1,
    logoPath: "/image/sponsorships/main-sponsor/biznet.png",
    instagramUrl: "https://www.biznetgio.com/",
    gradientFrom: "#E31937",
    gradientTo: "#FF6B6B",
    icon: "◆"
};

// Tier 2 - Gold Sponsors
export const goldSponsors: Sponsor[] = [
    {
        id: "kencana",
        name: "Toko Kencana",
        shortName: "Kencana",
        tier: 2,
        logoPath: "/image/sponsorships/gold-sponsor/kencana.png",
        gradientFrom: "#F59E0B",
        gradientTo: "#EAB308",
        icon: "◆"
    },
    {
        id: "cleo",
        name: "Cleo",
        shortName: "Cleo",
        tier: 2,
        logoPath: "/image/sponsorships/gold-sponsor/cleo.png",
        gradientFrom: "#0EA5E9",
        gradientTo: "#06B6D4",
        icon: "◆"
    },
    {
        id: "asta-grafika",
        name: "Asta Grafika",
        shortName: "Asta Grafika",
        tier: 2,
        logoPath: "/image/sponsorships/gold-sponsor/asta.png", // Placeholder
        gradientFrom: "#64748B",
        gradientTo: "#94A3B8",
        icon: "◆"
    },
    {
        id: "dreamstore",
        name: "Dream Store",
        shortName: "Dream Store",
        tier: 2,
        logoPath: "/image/sponsorships/gold-sponsor/dreamstore.png",
        imageClassName: "dark:invert mix-blend-screen",
        gradientFrom: "#10B981",
        gradientTo: "#14B8A6",
        icon: "◆"
    },
    {
        id: "kdm-wedding",
        name: "KDM Wedding",
        shortName: "KDM Wedding",
        tier: 2,
        logoPath: "/image/sponsorships/gold-sponsor/kdm.png",
        imageClassName: "mix-blend-screen brightness-125 contrast-125",
        gradientFrom: "#8B5CF6",
        gradientTo: "#EC4899",
        icon: "◆"
    }
];

// Tier 3 - Supporting Sponsors (empty for now, ready for future additions)
export const supportingSponsors: Sponsor[] = [];

// Media Partners
export const mediaPartners: Sponsor[] = [
    {
        id: "fortuna-fm",
        name: "Fortuna FM",
        shortName: "Fortuna FM",
        tier: 'media',
        logoPath: "/image/media-partners/fortuna-fm.png",
        gradientFrom: "#6366F1",
        gradientTo: "#8B5CF6",
        icon: "📻"
    },
    {
        id: "pituruh-news",
        name: "Pituruh News",
        shortName: "Pituruh News",
        tier: 'media',
        logoPath: "/image/media-partners/pituruh-news.png",
        gradientFrom: "#EF4444",
        gradientTo: "#F97316",
        icon: "📰"
    }
];

// Helper function to get all sponsors
export const getAllSponsors = (): Sponsor[] => [
    mainSponsor,
    ...goldSponsors,
    ...supportingSponsors,
    ...mediaPartners
];

// Legacy exports for backwards compatibility
export const platinumSponsors = goldSponsors;
