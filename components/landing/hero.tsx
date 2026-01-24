import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { TierOneSponsorLogo } from "./sponsor-logos";

export function Hero() {
    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-screen">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-200 mb-8 animate-fade-in-up">
                <span className="text-sm font-medium tracking-wide">
                    Official Event of Permikomnas Wilayah VII
                </span>
            </div>

            {/* Logo Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 animate-fade-in-up animation-delay-200">
                <Image
                    src="/image/logo/polsa.png"
                    alt="Politeknik Sawunggalih Aji"
                    width={120}
                    height={60}
                    className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none contrast-100 dark:contrast-100 brightness-0 dark:brightness-100"
                    style={{ width: "auto" }}
                />
                <div className="h-8 w-px bg-slate-300 dark:bg-white/10 hidden md:block"></div>
                <Image
                    src="/image/logo/genetika.png"
                    alt="HIMMA GENETIKA"
                    width={120}
                    height={60}
                    className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none contrast-100 dark:contrast-100 brightness-0 dark:brightness-100"
                    style={{ width: "auto" }}
                />
                <div className="h-8 w-px bg-slate-300 dark:bg-white/10 hidden md:block"></div>
                <Image
                    src="/image/logo/permikomas.png"
                    alt="Permikomnas"
                    width={120}
                    height={60}
                    className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none contrast-100 dark:contrast-100 brightness-0 dark:brightness-100"
                    style={{ width: "auto" }}
                />
                <div className="h-8 w-px bg-slate-300 dark:bg-white/10 hidden md:block"></div>
                <Image
                    src="/image/logo/muswil.png"
                    alt="MUSWIL VI"
                    width={120}
                    height={60}
                    className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none contrast-100 dark:contrast-100 brightness-0 dark:brightness-100"
                    style={{ width: "auto" }}
                />
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto text-glow">
                The Largest IT Student <br className="hidden md:block" />
                Forum in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-primary dark:to-blue-300">
                    Central Java
                </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Uniting <span className="text-slate-900 dark:text-white font-medium">45+ Student Associations</span> under
                PERMIKOMNAS for a weekend of innovation, governance, and collaboration.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRl4vOGFpmyMNTQ4pt9v4blto76lIT6_aKdEyyKIVx695gmQ/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-blue-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                    Join Delegate
                    <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/#merch" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-blue-200 dark:border-accent/50 text-blue-700 dark:text-accent hover:bg-blue-50 dark:hover:bg-accent/10 font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5 filled" />
                    Pre-order Merch
                </Link >
            </div>

            <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400 animate-fade-in-up delay-300">
                Registration closes on <span className="text-red-500 font-bold">January 18, 2026</span>
            </p>

            {/* Tier 1: Main Sponsor - Powered By (Transparent Display) */}
            <div className="flex flex-col items-center gap-3 animate-fade-in-up delay-500 mt-12 mb-4">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Powered By
                </span>
                <div className="relative group">
                    {/* Glow Effect Background */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Main Card - Transparent */}
                    <div className="relative px-8 py-5 transition-all duration-300 cursor-default">
                        <TierOneSponsorLogo variant="hero" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator uses CSS animation defined in globals.css */}
        </section>
    );
}
