"use client";

import { ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";

export function RegistrationForm() {
    return (
        <section className="py-24 px-6 max-w-2xl mx-auto" id="registration">
            <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden text-center shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-400 to-yellow-400"></div>

                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Register Now</h2>
                    <p className="text-slate-300 mb-8">
                        Secure your seat at the largest IT forum in Central Java.
                        Limited spots available for delegates and observers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdRl4vOGFpmyMNTQ4pt9v4blto76lIT6_aKdEyyKIVx695gmQ/viewform"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:scale-[1.02]"
                        >
                            Register Now
                            <ExternalLink className="h-5 w-5" />
                        </Link>

                        <Link
                            href="https://drive.google.com/file/d/1HL_0h2v8MtHEbJNZ5Uw72spsolRN356C/view" target="_blank"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-yellow-400 font-bold text-lg rounded-xl transition-all transform hover:scale-[1.02] group"
                        >
                            <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            Guide Book
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
