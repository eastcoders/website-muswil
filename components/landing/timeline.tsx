export function Timeline() {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto" id="agenda">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Event Timeline</h2>
                <p className="text-slate-400 mt-2">
                    A focused agenda designed for maximum impact.
                </p>
            </div>
            <div className="relative">
                {/* Vertical Gradient Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-accent transform -translate-x-1/2 rounded-full opacity-50"></div>

                {/* Item 1 */}
                <div className="relative z-10 mb-12 flex flex-col md:flex-row items-start md:items-center w-full group">
                    <div className="md:w-1/2 md:pr-12 text-left md:text-right pl-12 md:pl-0 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            Day 1: The Gathering
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                            Opening Ceremony, Keynote Speeches, and Initial Networking
                            Session.
                        </p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-background-dark z-20 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 pl-12 order-3">
                        <span className="inline-block px-3 py-1 rounded bg-surface-highlight text-xs font-mono text-primary border border-primary/20">
                            Friday, 07:30 AM
                        </span>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative z-10 mb-12 flex flex-col md:flex-row items-start md:items-center w-full group">
                    <div className="md:w-1/2 md:pr-12 text-left md:text-right pl-12 md:pl-0 order-2 md:order-1">
                        <span className="inline-block px-3 py-1 rounded bg-surface-highlight text-xs font-mono text-blue-600 dark:text-blue-300 border border-blue-500/20">
                            Saturday, 08:00 AM
                        </span>
                    </div>
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                        <div className="w-4 h-4 rounded-full bg-blue-400 ring-4 ring-white dark:ring-background-dark z-20 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 pl-12 order-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                            Day 2: The Forum
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                            Main conference sessions, commission meetings, and governance
                            elections.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full group">
                    <div className="md:w-1/2 md:pr-12 text-left md:text-right pl-12 md:pl-0 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                            Day 3: City Tour &amp; Closing
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                            Cultural exploration of the host city followed by the grand
                            closing ceremony.
                        </p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                        <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:ring-background-dark z-20 group-hover:scale-150 transition-transform shadow-[0_0_10px_#facc15]"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 pl-12 order-3">
                        <span className="inline-block px-3 py-1 rounded bg-surface-highlight text-xs font-mono text-amber-600 dark:text-accent border border-accent/20">
                            Sunday, 08:00 AM
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
