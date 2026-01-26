import { CheckCircle, Download, MessageCircle } from "lucide-react";
import Link from "next/link";

export function SponsorshipCTA() {
    return (
        <section className="relative py-20 px-6 mt-10 bg-slate-900 border-y border-white/5" id="sponsorship">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
            <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1">
                    <h2 className="text-3xl font-black text-white mb-4">
                        Support the Future of IT
                    </h2>
                    <p className="text-slate-300 text-lg mb-6">
                        Partner with us to gain exposure among the brightest tech students
                        in the region. Download our proposal to see available packages.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle className="text-yellow-400 text-lg h-5 w-5" />
                            Brand Visibility
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle className="text-yellow-400 text-lg h-5 w-5" />
                            Talent Acquisition
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle className="text-yellow-400 text-lg h-5 w-5" />
                            CSR Opportunity
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-4 w-full md:w-auto">
                    <Link
                        href="https://drive.google.com/file/d/1r3UFbb_5aRImHyfBJnIGwrvEC87qIJ2E/view?usp=sharing"
                        target="_blank"
                        className="bg-yellow-400 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:bg-yellow-300 transition-all flex items-center justify-center gap-3 w-full"
                    >
                        <Download className="h-6 w-6" />
                        Download Proposal
                    </Link>
                    <Link
                        href="https://wa.me/6285329931710"
                        target="_blank"
                        className="bg-transparent border border-slate-700 text-slate-300 font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/5 hover:text-white hover:border-white transition-all flex items-center justify-center gap-3 w-full"
                    >
                        <MessageCircle className="h-6 w-6" />
                        Contact Sponsorship
                    </Link>
                </div>
            </div>
        </section>
    );
}
