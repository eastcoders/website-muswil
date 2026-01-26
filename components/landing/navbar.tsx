"use client";

import Link from "next/link";
import { LayoutGrid, Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { TierOneSponsorLogo } from "./sponsor-logos";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo + Tier 1 Sponsor */}
                <div className="flex items-center gap-4">
                    <Link className="flex items-center gap-2 group" href="#">
                        <div className="relative h-10 w-auto aspect-[3/1]">
                            <Image
                                src="/image/logo/muswil.png"
                                alt="MUSWIL VI Logo"
                                fill
                                className="object-contain"
                                priority
                                sizes="120px"
                            />
                        </div>
                    </Link>

                    {/* Tier 1 Sponsor in Navbar - Desktop Only */}
                    <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-white/10">
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider">Presented by</span>
                        <TierOneSponsorLogo variant="navbar" />
                    </div>
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        href="#agenda"
                    >
                        Agenda
                    </Link>
                    <Link
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        href="#merch"
                    >
                        Merchandise
                    </Link>
                    <Link
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        href="#sponsorship"
                    >
                        Sponsorship
                    </Link>
                </div>
                {/* CTA & Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        className="hidden md:flex bg-accent hover:bg-yellow-300 text-black px-5 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdRl4vOGFpmyMNTQ4pt9v4blto76lIT6_aKdEyyKIVx695gmQ/viewform"
                        target="_blank"
                    >
                        Register Now
                    </Link>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/5 bg-zinc-950 backdrop-blur-xl absolute top-20 left-0 w-full p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5 fade-in duration-200">
                    <Link
                        className="text-lg font-medium text-slate-400 hover:text-white transition-colors"
                        href="#agenda"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Agenda
                    </Link>
                    <Link
                        className="text-lg font-medium text-slate-400 hover:text-white transition-colors"
                        href="#merch"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Merchandise
                    </Link>
                    <Link
                        className="text-lg font-medium text-slate-400 hover:text-white transition-colors"
                        href="#sponsorship"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sponsorship
                    </Link>
                    <Link
                        className="w-full bg-accent hover:bg-yellow-300 text-black px-5 py-3 rounded-lg text-center font-bold transition-all shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdRl4vOGFpmyMNTQ4pt9v4blto76lIT6_aKdEyyKIVx695gmQ/viewform"
                        target="_blank"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Register Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
