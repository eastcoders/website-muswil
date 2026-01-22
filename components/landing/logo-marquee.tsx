export function LogoMarquee() {
    const logos = [
        "UDINUS", "UNDIP", "UNNES", "UKSW", "UNSOED", "AMIKOM", "UMS", "UNISSULA", "USM", "UPGRIS",
        "UNIMUS", "POLINES", "UNWAHAS", "UIN WALISONGO", "STIE BANK JATENG", "UNW", "UKRIM",
        "UNY", "UGM", "UII", "UPN VETERAN", "UNJANI", "STMIK", "AKPRIND", "UTY", "UAD", "UNISA",
        "UNIKA", "STIKUBANK", "STEKOM", "UNSIQ", "IT TELKOM", "UNU", "UNWIDHA", "STIMIK TUNAS BANGSA",
        "POLITEKNIK HARAPAN BERSAMA", "UPS", "UNIKAL", "STIMIK WP", "UNIMMA", "UNTIDAR", "POLITEKNIK SAWUNGGALIH AJI", "UMP"
    ];

    // Split logos into two batches
    const firstBatch = logos.slice(0, Math.ceil(logos.length / 2));
    const secondBatch = logos.slice(Math.ceil(logos.length / 2));

    return (
        <section className="py-10 border-y border-black/5 dark:border-white/5 bg-background/50 overflow-hidden relative">
            {/* Gradients for smooth fade effect at edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <div className="flex flex-col gap-8">
                {/* Row 1 - Left to Right (Slower) */}
                <div className="flex gap-16 items-center animate-scroll whitespace-nowrap hover:[animation-play-state:paused] w-max" style={{ animationDuration: '60s' }}>
                    {firstBatch.map((logo, index) => (
                        <span key={`r1-${index}`} className="text-2xl md:text-3xl font-black font-display tracking-tighter text-slate-600 hover:text-slate-900 dark:text-slate-600 dark:hover:text-white transition-colors cursor-default select-none">
                            {logo}
                        </span>
                    ))}
                    {firstBatch.map((logo, index) => (
                        <span key={`r1-dup-${index}`} className="text-2xl md:text-3xl font-black font-display tracking-tighter text-slate-600 hover:text-slate-900 dark:text-slate-600 dark:hover:text-white transition-colors cursor-default select-none">
                            {logo}
                        </span>
                    ))}
                </div>

                {/* Row 2 - Right to Left (Slower) */}
                <div className="flex gap-16 items-center animate-scroll whitespace-nowrap hover:[animation-play-state:paused] w-max" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
                    {secondBatch.map((logo, index) => (
                        <span key={`r2-${index}`} className="text-2xl md:text-3xl font-black font-display tracking-tighter text-slate-600 hover:text-slate-900 dark:text-slate-600 dark:hover:text-white transition-colors cursor-default select-none">
                            {logo}
                        </span>
                    ))}
                    {secondBatch.map((logo, index) => (
                        <span key={`r2-dup-${index}`} className="text-2xl md:text-3xl font-black font-display tracking-tighter text-slate-600 hover:text-slate-900 dark:text-slate-600 dark:hover:text-white transition-colors cursor-default select-none">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
