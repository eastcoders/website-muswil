export function SponsorsSection() {
    return (
        <section className="py-20 px-6 bg-slate-50 dark:bg-zinc-950/50 border-y border-slate-200 dark:border-white/5" id="sponsors">
            <div className="max-w-7xl mx-auto">

                {/* Tier 2: Official Partners */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-xs mb-2 block">
                            Our Ecosystem
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                            Official Partners
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "DevStudio", color: "from-blue-500 to-indigo-500" },
                            { name: "CodeAcademy", color: "from-emerald-500 to-teal-500" },
                            { name: "TechGear ID", color: "from-orange-500 to-red-500" },
                            { name: "CyberLabs", color: "from-purple-500 to-pink-500" },
                            { name: "BuildFaster", color: "from-cyan-500 to-blue-500" },
                            { name: "InnovateHub", color: "from-yellow-400 to-orange-500" },
                        ].map((sponsor, i) => (
                            <div
                                key={i}
                                className="group relative h-24 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                <span className={`font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r ${sponsor.color} text-center`}>
                                    {sponsor.name}
                                </span>
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent mb-16"></div>

                {/* Tier 3: Community Supporters */}
                <div>
                    <div className="text-center mb-10">
                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-400">
                            Community Supporters
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            "LocalHost Coffee", "Kutoarjo Printing", "Alumni Network", "StartUp Garage",
                            "Java Devs", "OpenSource ID", "IndoHoster", "Campus Media",
                            "Student Daily", "Tech Community"
                        ].map((name, i) => (
                            <div
                                key={i}
                                className="h-16 rounded-lg border border-slate-200 dark:border-white/5 flex items-center justify-center p-3 opacity-60 hover:opacity-100 hover:border-slate-400 dark:hover:border-white/20 transition-all cursor-pointer bg-slate-50 dark:bg-white/5"
                            >
                                <span className="font-semibold text-xs md:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-tight text-center">
                                    {name}
                                </span>
                            </div>
                        ))}
                        {/* Available Slot Placeholder */}
                        <div className="h-16 rounded-lg border border-dashed border-slate-300 dark:border-white/10 flex items-center justify-center p-3 opacity-40 hover:opacity-80 transition-all cursor-pointer">
                            <span className="font-medium text-xs text-slate-500 dark:text-slate-500 uppercase tracking-tight text-center">
                                + Your Brand
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
