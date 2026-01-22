import { Gavel, Lightbulb, Network } from "lucide-react";

export function WhyAttend() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Why Attend MUSWIL VI?
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="glass-card p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300">
                    <div className="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors text-accent border border-white/10">
                        <Network className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Networking Hub</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        Connect directly with student leaders and tech enthusiasts from over
                        45 universities across Central Java.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="glass-card p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300">
                    <div className="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors text-accent border border-white/10">
                        <Gavel className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Strategic Governance
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        Participate in shaping the future direction of PERMIKOMNAS through democratic forums and policy making.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="glass-card p-8 rounded-2xl group hover:border-accent/30 transition-all duration-300">
                    <div className="h-12 w-12 rounded-lg bg-surface-highlight flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-black transition-colors text-accent border border-white/10">
                        <Lightbulb className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Tech Innovation</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        Share breakthrough ideas, collaborate on projects, and discover the
                        latest trends in the regional IT ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
}
