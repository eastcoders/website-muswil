import Link from "next/link";
import { Code, LayoutGrid, Instagram, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-black/5 dark:border-white/5 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div>
                        <Link className="flex items-center gap-2 mb-6" href="#">
                            <div className="h-8 w-8 bg-primary/20 rounded flex items-center justify-center border border-primary/20">
                                <LayoutGrid className="text-primary h-5 w-5" />
                            </div>
                            <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
                                MUSWIL VI<span className="text-accent">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            Permikomnas Wilayah VII Jawa Tengah.
                            <br />
                            Building the next generation of IT leaders through collaboration and innovation.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-500">
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRl4vOGFpmyMNTQ4pt9v4blto76lIT6_aKdEyyKIVx695gmQ/viewform"
                                    target="_blank"
                                >
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="#agenda"
                                >
                                    Schedule & Agenda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="#merch"
                                >
                                    Merchandise
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="#sponsorship"
                                >
                                    Sponsorship
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-500">
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                    href="https://instagram.com/muswil6_jateng"
                                    target="_blank"
                                >
                                    <Instagram className="h-4 w-4" />
                                    @muswil6_jateng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                    href="https://instagram.com/permikomnas_jateng"
                                    target="_blank"
                                >
                                    <Instagram className="h-4 w-4" />
                                    @permikomnas_jateng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                    href="mailto:muswil6polsa@gmail.com"
                                >
                                    <Mail className="h-4 w-4" />
                                    muswil6polsa@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Location */}
                    <div className="flex flex-col h-full">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Location</h4>
                        <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 relative group">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.689655939262!2d109.91305197508969!3d-7.716409876450698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac197bf5258c7%3A0xf7550ad4116b5e72!2sPoliteknik%20Sawunggalih%20Aji!5e0!3m2!1sid!2sid!4v1767980862736!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                        <p className="text-xs text-slate-500 mt-4">
                            Politeknik Sawunggalih Aji (POLSA) Kutoarjo
                        </p>
                    </div>
                </div>

                <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs text-center md:text-left">
                        © 2026 MUSWIL VI PERMIKOMNAS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <p className="text-slate-600 text-xs">
                            Developed by{" "}
                            <span className="text-slate-400 font-medium">
                                Genetika Dev Team
                            </span>
                        </p>
                        <Code className="text-slate-600 text-xs h-4 w-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
