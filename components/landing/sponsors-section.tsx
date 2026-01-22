import { TierOneSponsorLogo, PlatinumSponsorsGrid, SupportingSponsorsGrid } from "./sponsor-logos";
import { mainSponsor } from "@/lib/sponsor-data";

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

                {/* Tier 1: Main Sponsor - Featured Display */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                            <span className="text-lg">🏆</span>
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                Main Sponsor
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative group">
                            {/* Ambient Glow */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Main Card */}
                            <div className="relative bg-white dark:bg-zinc-900 rounded-3xl border-2 border-blue-500/20 dark:border-blue-500/30 p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <TierOneSponsorLogo variant="hero" />
                                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                                    {mainSponsor.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mb-16"></div>

                {/* Tier 2: Platinum Sponsors */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 border border-violet-500/20 mb-4">
                            <span className="text-lg">🥈</span>
                            <span className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                                Platinum Sponsors
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                            Official Partners
                        </h3>
                    </div>

                    <PlatinumSponsorsGrid />
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mb-16"></div>

                {/* Tier 3: Supporting Sponsors */}
                <div>
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

                    {/* Available Slot Placeholder */}
                    <div className="mt-8 flex justify-center">
                        <div className="px-6 py-3 rounded-xl border border-dashed border-slate-300 dark:border-white/10 flex items-center gap-2 opacity-60 hover:opacity-100 hover:border-blue-500/50 transition-all cursor-pointer group">
                            <span className="text-slate-400 dark:text-slate-500 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                + Become a Sponsor
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
