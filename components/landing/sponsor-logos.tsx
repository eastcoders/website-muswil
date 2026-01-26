import Image from "next/image";
import { mainSponsor, goldSponsors, supportingSponsors, mediaPartners, type Sponsor } from "@/lib/sponsor-data";

interface SponsorLogoProps {
    sponsor: Sponsor;
    className?: string;
    showLabel?: boolean;
}

// Generic Sponsor Logo Component
export function SponsorLogo({ sponsor, className = "", showLabel = true }: SponsorLogoProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {sponsor.logoPath ? (
                <Image
                    src={sponsor.logoPath}
                    alt={sponsor.name}
                    width={40}
                    height={40}
                    className="object-contain"
                />
            ) : (
                <div
                    className="flex items-center justify-center rounded-lg font-black w-10 h-10"
                    style={{
                        background: `linear-gradient(135deg, ${sponsor.gradientFrom}, ${sponsor.gradientTo})`,
                    }}
                >
                    <span className="text-white">{sponsor.icon}</span>
                </div>
            )}
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

// Tier 1 - Main Sponsor Logo (Extra Large, Premium Styling, Clickable)
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

    const logoSizes = {
        navbar: { width: 100, height: 32 },
        hero: { width: 200, height: 80 },
        footer: { width: 100, height: 40 },
    };

    const content = (
        <div className={`flex items-center justify-center ${sizeClasses[variant]} ${className}`}>
            <Image
                src={sponsor.logoPath}
                alt={sponsor.name}
                width={logoSizes[variant].width}
                height={logoSizes[variant].height}
                className="object-contain h-full w-auto"
                priority={variant === "hero"}
            />
        </div>
    );

    // Wrap with link if URL exists
    if (sponsor.instagramUrl) {
        return (
            <a
                href={sponsor.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-105"
                title={`Kunjungi ${sponsor.name}`}
            >
                {content}
            </a>
        );
    }

    return content;
}

// Tier 2 - Gold Sponsor Card (Premium styling with slate background)
interface TierTwoSponsorCardProps {
    sponsor: Sponsor;
    className?: string;
}

export function TierTwoSponsorCard({ sponsor, className = "" }: TierTwoSponsorCardProps) {
    // If no logo, show premium placeholder with dashed border
    if (!sponsor.logoPath) {
        return (
            <div
                className={`group relative h-20 md:h-24 flex items-center justify-center px-8 transition-all duration-300 ${className}`}
            >
                <div className="flex flex-col items-center justify-center gap-2 text-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                            background: `linear-gradient(135deg, ${sponsor.gradientFrom}40, ${sponsor.gradientTo}40)`,
                            border: `1px solid ${sponsor.gradientFrom}30`
                        }}
                    >
                        <span className="text-sm text-slate-400">{sponsor.icon || "◆"}</span>
                    </div>
                    <span className="font-medium text-slate-500 dark:text-slate-400 text-xs md:text-sm tracking-wide">
                        {sponsor.name}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`group relative h-20 md:h-24 flex items-center justify-center px-8 transition-all duration-300 ${className}`}
        >
            {/* Logo Content - Grayscale by default, color on hover */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Image
                    src={sponsor.logoPath}
                    alt={sponsor.name}
                    width={140}
                    height={80}
                    className={`object-contain max-h-12 md:max-h-16 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${sponsor.imageClassName || ""}`}
                />
            </div>
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
            className={`h-16 md:h-20 rounded-xl border border-slate-300 dark:border-slate-400/50 flex items-center justify-center gap-3 p-4 bg-slate-100 dark:bg-slate-200 opacity-80 hover:opacity-100 hover:shadow-md transition-all cursor-default ${className}`}
        >
            <Image
                src={sponsor.logoPath}
                alt={sponsor.name}
                width={80}
                height={40}
                className="object-contain max-h-12 w-auto"
            />
        </div>
    );
}

// Media Partner Card
interface MediaPartnerCardProps {
    sponsor: Sponsor;
    className?: string;
}

export function MediaPartnerCard({ sponsor, className = "" }: MediaPartnerCardProps) {
    return (
        <div
            className={`h-20 md:h-24 rounded-xl border border-slate-300 dark:border-slate-400/50 flex items-center justify-center p-5 bg-slate-100 dark:bg-slate-200 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${className}`}
        >
            <Image
                src={sponsor.logoPath}
                alt={sponsor.name}
                width={120}
                height={60}
                className="object-contain max-h-14 w-auto"
            />
        </div>
    );
}

// Pre-built Marquee Component for Gold Sponsors
export function GoldSponsorsMarquee() {
    if (goldSponsors.length === 0) return null;

    // Duplicate sponsors for seamless infinite scroll
    const duplicatedSponsors = [...goldSponsors, ...goldSponsors, ...goldSponsors];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 dark:from-zinc-950/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 dark:from-zinc-950/50 to-transparent z-10 pointer-events-none"></div>

            {/* Marquee container */}
            <div className="flex animate-marquee hover:pause-animation">
                {duplicatedSponsors.map((sponsor, index) => (
                    <div key={`${sponsor.id}-${index}`} className="flex-shrink-0">
                        <TierTwoSponsorCard sponsor={sponsor} />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Legacy Grid export (renamed)
export function GoldSponsorsGrid() {
    return <GoldSponsorsMarquee />;
}

export function SupportingSponsorsGrid() {
    if (supportingSponsors.length === 0) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {supportingSponsors.map((sponsor) => (
                <TierThreeSponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
        </div>
    );
}

export function MediaPartnersGrid() {
    if (mediaPartners.length === 0) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mediaPartners.map((sponsor) => (
                <MediaPartnerCard key={sponsor.id} sponsor={sponsor} />
            ))}
        </div>
    );
}

// Legacy export for backwards compatibility
export const PlatinumSponsorsGrid = GoldSponsorsGrid;
