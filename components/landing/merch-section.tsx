"use client";

import { ShoppingBag, Star, ArrowRight, Lock, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MerchSection() {
    const [isExpired, setIsExpired] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target date: January 12, 2026 00:00:00 WIB (GMT+7)
        // This means it expires as soon as Jan 11 ends.
        const expiryDate = new Date('2026-01-12T00:00:00+07:00');

        const updateTimer = () => {
            const now = new Date();
            const difference = expiryDate.getTime() - now.getTime();

            if (difference <= 0) {
                setIsExpired(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        // Initial check
        updateTimer();

        // Update every second
        const timerId = setInterval(updateTimer, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto" id="merch">
            <div className="text-center mb-16 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Wear the Pride
                </h2>
                <p className="text-slate-400 mb-8">
                    Official Merchandise of MUSWIL VI PERMIKOMNAS Jawa Tengah.
                </p>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* T-Shirt Card */}
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="h-64 bg-surface-highlight mb-6 rounded-xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="/image/t-shirt.png"
                                alt="Official T-Shirt"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full flex justify-between items-end mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Official T-Shirt</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Cotton Combed 20s • Plastisol Ink</p>
                            </div>
                            <p className="text-xl font-bold text-blue-600 dark:text-accent">IDR 85k</p>
                        </div>

                        {isExpired ? (
                            <button disabled className="w-full py-4 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-500 font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
                                <Lock className="h-5 w-5" />
                                Pre-order Closed
                            </button>
                        ) : (
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoQz17yOCfxXO1bNruNW3pc4jropyHwkzreMeHuhVMdtJQqQ/viewform?usp=send_form" target="_blank" className="w-full py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 dark:bg-surface-highlight dark:hover:bg-surface dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group-hover:border-primary/50">
                                <ShoppingBag className="h-5 w-5" />
                                Pre-order T-Shirt
                            </Link>
                        )}
                        {!isExpired && (
                            <p className="mt-3 text-center text-xs text-red-500 font-medium flex items-center justify-center gap-1.5">
                                <Timer className="w-3.5 h-3.5 animate-pulse" />
                                <span>Pre-order ends in <span className="font-mono font-bold text-sm ml-0.5">{String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s</span></span>
                            </p>
                        )}
                    </div>
                </div>

                {/* Varsity Card */}
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border-amber-500/20">
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-all duration-500"></div>

                    {/* Badge */}
                    <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1 shadow-lg shadow-yellow-400/20">
                        <Star className="h-3 w-3 fill-slate-900" />
                        Limited Edition
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="h-64 bg-surface-highlight mb-6 rounded-xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="/image/varsity.png"
                                alt="Premium Varsity"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full flex justify-between items-end mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Premium Varsity</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fleece Cotton</p>
                            </div>
                            <p className="text-xl font-bold text-amber-600 dark:text-amber-400">IDR 195k</p>
                        </div>

                        {isExpired ? (
                            <button disabled className="w-full py-4 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-500 font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
                                <Lock className="h-5 w-5" />
                                Pre-order Closed
                            </button>
                        ) : (
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoQz17yOCfxXO1bNruNW3pc4jropyHwkzreMeHuhVMdtJQqQ/viewform?usp=send_form" target="_blank" className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                                Pre-order Varsity
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        )}
                        {!isExpired && (
                            <p className="mt-3 text-center text-xs text-red-500 font-medium flex items-center justify-center gap-1.5">
                                <Timer className="w-3.5 h-3.5 animate-pulse" />
                                <span>Pre-order ends in <span className="font-mono font-bold text-sm ml-0.5">{String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s</span></span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
