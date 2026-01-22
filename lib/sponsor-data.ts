// Sponsor Data Store with Tiered Hierarchy
// Tier 1: Main Sponsor (1) - Visible everywhere
// Tier 2: Medium Sponsors (3) - Visible in sponsors section, prominent
// Tier 3: Basic Sponsors (5) - Visible in sponsors section, smaller

export interface Sponsor {
    id: string;
    name: string;
    shortName?: string;
    tier: 1 | 2 | 3;
    gradientFrom: string;
    gradientTo: string;
    icon: string; // Emoji or icon identifier
}

// Tier 1 - Main Sponsor (1)
export const mainSponsor: Sponsor = {
    id: "nexatech",
    name: "NexaTech Corporation",
    shortName: "NEXATECH",
    tier: 1,
    gradientFrom: "#3B82F6", // blue-500
    gradientTo: "#06B6D4",   // cyan-500
    icon: "◆"
};

// Tier 2 - Medium Sponsors (3)
export const platinumSponsors: Sponsor[] = [
    {
        id: "cloudbase",
        name: "CloudBase Systems",
        shortName: "CloudBase",
        tier: 2,
        gradientFrom: "#8B5CF6", // violet-500
        gradientTo: "#EC4899",   // pink-500
        icon: "☁"
    },
    {
        id: "dataforge",
        name: "DataForge Analytics",
        shortName: "DataForge",
        tier: 2,
        gradientFrom: "#10B981", // emerald-500
        gradientTo: "#14B8A6",   // teal-500
        icon: "⚙"
    },
    {
        id: "cyberflow",
        name: "CyberFlow Security",
        shortName: "CyberFlow",
        tier: 2,
        gradientFrom: "#F59E0B", // amber-500
        gradientTo: "#EF4444",   // red-500
        icon: "⚡"
    }
];

// Tier 3 - Basic Sponsors (5)
export const supportingSponsors: Sponsor[] = [
    {
        id: "devspark",
        name: "DevSpark Studio",
        shortName: "DevSpark",
        tier: 3,
        gradientFrom: "#6B7280",
        gradientTo: "#9CA3AF",
        icon: "✦"
    },
    {
        id: "codenest",
        name: "CodeNest Labs",
        shortName: "CodeNest",
        tier: 3,
        gradientFrom: "#6B7280",
        gradientTo: "#9CA3AF",
        icon: "◈"
    },
    {
        id: "bytehive",
        name: "ByteHive Tech",
        shortName: "ByteHive",
        tier: 3,
        gradientFrom: "#6B7280",
        gradientTo: "#9CA3AF",
        icon: "⬡"
    },
    {
        id: "pixelcraft",
        name: "PixelCraft Digital",
        shortName: "PixelCraft",
        tier: 3,
        gradientFrom: "#6B7280",
        gradientTo: "#9CA3AF",
        icon: "◇"
    },
    {
        id: "netpulse",
        name: "NetPulse Connect",
        shortName: "NetPulse",
        tier: 3,
        gradientFrom: "#6B7280",
        gradientTo: "#9CA3AF",
        icon: "◎"
    }
];

// Helper function to get all sponsors
export const getAllSponsors = (): Sponsor[] => [
    mainSponsor,
    ...platinumSponsors,
    ...supportingSponsors
];
