"use client";

import { Camera, ArrowRight } from "lucide-react";
import Image from "next/image";

export function GallerySection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden" id="gallery">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                <Camera className="h-5 w-5" />
                            </div>
                            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-sm">
                                Past Events
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            Captured Moments
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-lg">
                            Witness the energy, collaboration, and innovation from previous Permikomnas gatherings.
                            Join us and be part of the history.
                        </p>
                    </div>
                </div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">

                    {/* Main Feature - Seminar */}
                    <div className="group relative overflow-hidden rounded-3xl col-span-1 md:col-span-2 md:row-span-2 cursor-pointer">
                        <Image
                            src="/image/gallery/3.jpg"
                            alt="Grand Seminar Atmosphere"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">
                                Grand Seminar
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-2">Knowledge Sharing</h3>
                            <p className="text-slate-300 text-sm line-clamp-2">
                                Industry leaders sharing insights on the future of technology and digital transformation.
                            </p>
                        </div>
                    </div>

                    {/* Top Right - Networking */}
                    <div className="group relative overflow-hidden rounded-3xl col-span-1 md:col-span-2 md:row-span-1 cursor-pointer">
                        <Image
                            src="/image/gallery/1.jpg"
                            alt="Networking Session"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex justify-between items-end w-full">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Networking</h3>
                                    <p className="text-slate-300 text-xs">Building lasting connections.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <ArrowRight className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Left - Workshop */}
                    <div className="group relative overflow-hidden rounded-3xl col-span-1 md:col-span-1 md:row-span-1 cursor-pointer">
                        <Image
                            src="/image/gallery/4.jpg"
                            alt="Technical Workshop"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-lg font-bold text-white mb-1">Workshops</h3>
                            <p className="text-slate-200 text-xs">Hands-on experience.</p>
                        </div>
                    </div>

                    {/* Bottom Right - Award */}
                    <div className="group relative overflow-hidden rounded-3xl col-span-1 md:col-span-1 md:row-span-1 cursor-pointer">
                        <Image
                            src="/image/gallery/2.jpg"
                            alt="Awarding Night"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/80 to-transparent mix-blend-multiply"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-lg font-bold text-white mb-1">Awarding</h3>
                            <p className="text-slate-200 text-xs">Celebrating excellence.</p>
                        </div>
                    </div>

                </div>

                {/* Call Out */}
                <div className="mt-8 text-center md:text-right">
                    <p className="text-slate-500 dark:text-slate-400 text-sm italic">
                        *Archive photos from Muswil V & Rakernas 2024
                    </p>
                </div>
            </div>
        </section>
    );
}
