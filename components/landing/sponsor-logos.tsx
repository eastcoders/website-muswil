import { mainSponsor, platinumSponsors, supportingSponsors, type Sponsor } from "@/lib/sponsor-data";

interface SponsorLogoProps {
    sponsor: Sponsor;
    className?: string;
    showLabel?: boolean;
}

// Generic Sponsor Logo Component
export function SponsorLogo({ sponsor, className = "", showLabel = true }: SponsorLogoProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div
                className="flex items-center justify-center rounded-lg font-black"
                style={{
                    background: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                }}
            >
                <span className="text-white">{sponsor.icon}</span>
            </div>
            {showLabel && (
                <span
                    className="font-bold bg-clip-text text-transparent"
                    style={{
                        backgroundImage: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                    }}
                >
                    {sponsor.shortName || sponsor.name}
                </span>
            )}
        </div>
    );
}

// Tier 1 - Main Sponsor Logo (Extra Large, Premium Styling)
interface TierOneSponsorLogoProps {
    className?: string;
    variant?: "navbar" | "hero" | "footer";
}

export function TierOneSponsorLogo({ className = "", variant = "hero" }: TierOneSponsorLogoProps) {
    const sponsor = mainSponsor;

    const sizeClasses = {
        navbar: "h-8",
        hero: "h-16 md:h-20",
        footer: "h-10",
    };

    const iconSizeClasses = {
        navbar: "w-7 h-7 text-base",
        hero: "w-12 h-12 md:w-14 md:h-14 text-2xl md:text-3xl",
        footer: "w-8 h-8 text-lg",
    };

    const textSizeClasses = {
        navbar: "text-sm",
        hero: "text-2xl md:text-3xl",
        footer: "text-base",
    };

    return (
        <div className={`flex items-center gap-3 ${sizeClasses[variant]} ${className}`}>
            <div
                className={`flex items-center justify-center rounded-xl shadow-lg ${iconSizeClasses[variant]}`}
                style={{
                    background: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                    boxShadow: `0 0 20px ${sponsor.gradientFrom}40`,
                }}
            >
                <span className="text-white drop-shadow-md">{sponsor.icon}</span>
            </div>
            <span
                className={`font-black tracking-tight ${textSizeClasses[variant]} bg-clip-text text-transparent`}
                style={{
                    backgroundImage: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                }}
            >
                {sponsor.shortName}
            </span>
        </div>
    );
}

// Tier 2 - Platinum Sponsor Card (Large, with hover effects)
interface TierTwoSponsorCardProps {
    sponsor: Sponsor;
    className?: string;
}

export function TierTwoSponsorCard({ sponsor, className = "" }: TierTwoSponsorCardProps) {
    return (
        <div
            className={`group relative h-28 md:h-32 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 flex items-center justify-center p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${className}`}
        >
            {/* Gradient Background on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                    background: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                }}
            />

            {/* Logo Content */}
            <div className="flex items-center gap-4 relative z-10">
                <div
                    className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl text-2xl md:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{
                        background: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                        boxShadow: `0 4px 20px ${sponsor.gradientFrom}30`,
                    }}
                >
                    <span className="text-white drop-shadow">{sponsor.icon}</span>
                </div>
                <span
                    className="font-bold text-lg md:text-xl bg-clip-text text-transparent"
                    style={{
                        backgroundImage: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                    }}
                >
                    {sponsor.shortName}
                </span>
            </div>

            {/* Corner Accent */}
            <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: sponsor.gradientFrom }}
            />
        </div>
    );
}

// Tier 3 - Supporting Sponsor Card (Smaller, minimal styling)
interface TierThreeSponsorCardProps {
    sponsor: Sponsor;
    className?: string;
}

export function TierThreeSponsorCard({ sponsor, className = "" }: TierThreeSponsorCardProps) {
    return (
        <div
            className={`h-16 md:h-20 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center gap-3 p-4 bg-slate-50 dark:bg-white/5 opacity-70 hover:opacity-100 hover:border-slate-400 dark:hover:border-white/20 transition-all cursor-default ${className}`}
        >
            <div
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg text-sm md:text-base"
                style={{
                    background: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                }}
            >
                <span className="text-white">{sponsor.icon}</span>
            </div>
            <span className="font-semibold text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-tight">
                {sponsor.shortName}
            </span>
        </div>
    );
}

// Pre-built Grid Components
export function PlatinumSponsorsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platinumSponsors.map((sponsor) => (
                <TierTwoSponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
        </div>
    );
}

export function SupportingSponsorsGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {supportingSponsors.map((sponsor) => (
                <TierThreeSponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
        </div>
    );
}
