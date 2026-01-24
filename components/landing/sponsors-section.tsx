import { TierOneSponsorLogo, GoldSponsorsGrid, SupportingSponsorsGrid } from "./sponsor-logos";
import { supportingSponsors } from "@/lib/sponsor-data";

export function SponsorsSection() {
    return (
        <section className="py-20 px-6 bg-slate-50 dark:bg-zinc-950/50 border-y border-slate-200 dark:border-white/5" id="sponsors">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-xs mb-2 block">
                        Our Partners
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                        Powered by Industry Leaders
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Terima kasih kepada sponsor yang mendukung MUSWIL VI PERMIKOMNAS
                    </p>
                </div>

                {/* Tier 1: Main Sponsor - Premium Featured Display */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                            <span className="text-lg">🏆</span>
                            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                Powered By
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative group">
                            {/* Premium Glow Effect - Biznet Brand Colors (Green/Teal) */}
                            <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-emerald-500/20 via-teal-500/25 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"></div>
                            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

                            {/* Main Sponsor Card - Transparent with Glow */}
                            <div className="relative p-8 md:p-10 transition-all duration-500 group-hover:scale-105 min-w-[280px] md:min-w-[360px]">
                                {/* Logo Container - Larger */}
                                <div className="relative z-10 h-20 md:h-24 flex items-center justify-center">
                                    <TierOneSponsorLogo variant="hero" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mb-12"></div>

                {/* Tier 2: Official Sponsors - Marquee */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                            Official Partners
                        </h3>
                    </div>

                    <GoldSponsorsGrid />
                </div>

                {/* Tier 3: Supporting Sponsors - Only show if not empty */}
                {supportingSponsors.length > 0 && (
                    <>
                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mb-16"></div>

                        <div className="mb-16">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4">
                                    <span className="text-lg">🥉</span>
                                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                                        Supporting Sponsors
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-700 dark:text-slate-400">
                                    Community Supporters
                                </h3>
                            </div>

                            <SupportingSponsorsGrid />
                        </div>
                    </>
                )}



                {/* Available Slot Placeholder */}
                <div className="mt-12 flex justify-center">
                    <div className="px-6 py-3 rounded-xl border border-dashed border-slate-300 dark:border-white/10 flex items-center gap-2 opacity-60 hover:opacity-100 hover:border-blue-500/50 transition-all cursor-pointer group">
                        <span className="text-slate-400 dark:text-slate-500 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            + Become a Sponsor
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
