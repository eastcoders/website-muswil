import { GraduationCap, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function ImpactGrid() {
    return (
        <section className="py-20 px-6 bg-surface/30 border-y border-white/5 relative overflow-hidden">
            {/* Abstract gradient background for section */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                            Impact at Scale
                        </h2>
                        <p className="text-slate-400">
                            The numbers behind the largest student forum.
                        </p>
                    </div>
                    {/* Decoration */}
                    <div className="hidden md:flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[550px]">
                    {/* Main Stat Card - Permikomnas About */}
                    <div className="glass-card col-span-1 md:col-span-2 md:row-span-2 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity grayscale mix-blend-luminosity"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAM3o3zWZ9pAX_Zo8qkKe-hGzjZtaGm70XBLdAtAsl1s02g_2N4m-mOI-MtdoT_jb3J3xHUEmupCUfhm1L3IsjShcFjJMN1Y1b7NcgujVbDNpoGzwpAI7TbI4LgZHVDyNBh0L0A7AW03TVO22ZClN8hrLuz3bnayG5cJkth4wfYAFb80Rqi-ATcDWANyznzWJBHILcojLtiokPjJa5zzfV555gIQMupn4gAqkvXeeOMrNICbF8_NxsBky59uED5jRNf9B1X8e0tKf0')",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 to-background-dark/50"></div>

                        {/* External Link Icon */}
                        <a href="https://permikomnas.org" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 z-20 p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <ArrowUpRight className="h-5 w-5" />
                        </a>

                        <div className="relative z-10">
                            {/* Replaced Icon with Logo */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center p-2 border border-white/10 backdrop-blur-sm shadow-lg overflow-hidden">
                                    <Image
                                        src="/image/logo/permikomas.png"
                                        alt="Permikomnas Logo"
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        Permikomnas RI
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full w-fit mt-1 border border-primary/20">
                                        National Organization
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                Perhimpunan Mahasiswa Informatika dan Komputer Nasional yang disingkat <span className="text-white font-medium">PERMIKOMNAS</span> merupakan organisasi kemahasiswaan informatika dan komputer di Indonesia.
                            </p>
                            <p className="text-slate-400 text-xs leading-relaxed border-l-2 border-slate-700 pl-3 italic mb-4">
                                "Latar belakang terbentuknya PERMIKOMNAS bermula dari Pertemuan Himpunan Mahasiswa Teknik Informatika dan Komputer Nasional yang dilaksanakan pada tanggal 19 – 21 Agustus 2002 di PUSPIPTEK Serpong Tangerang."
                            </p>
                            <p className="text-slate-400 text-xs leading-relaxed border-l-2 border-slate-700 pl-3 italic">
                                PERMIKOMNAS secara resmi didirikan pada tanggal 21 Agustus 2002 bertempat di PUSPIPTEK (Pusat Penelitian Ilmu Pengetahuan dan Teknologi) Serpong Tangerang Selatan, Provinsi Banten, Indonesia.
                            </p>
                        </div>

                        <div className="relative z-10 mt-6 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-3xl font-black text-white tracking-tighter">
                                        2002
                                    </p>
                                    <p className="text-xs text-slate-500 font-medium">
                                        Established
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-black text-white tracking-tighter">
                                        45+
                                    </p>
                                    <p className="text-xs text-slate-500 font-medium">
                                        Active Campuses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Secondary Stat 1 */}
                    <div className="glass-card col-span-1 md:col-span-1 rounded-2xl p-6 flex flex-col justify-center border-l-4 border-l-accent">
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
                            Duration
                        </p>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">3 Days</h3>
                        <p className="text-xs text-slate-500 mt-2">
                            Intensive collaboration
                        </p>
                    </div>
                    {/* Secondary Stat 2 */}
                    <div className="glass-card col-span-1 md:col-span-1 rounded-2xl p-6 flex flex-col justify-center border-l-4 border-l-primary">
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">
                            Delegates
                        </p>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">100+</h3>
                        <p className="text-xs text-slate-500 mt-2">Student Leaders</p>
                    </div>
                    {/* Association Marquee */}
                    <div className="glass-card col-span-1 md:col-span-2 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-surface-highlight/50"></div>
                        <p className="relative z-10 text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">
                            Member Associations
                        </p>

                        <div className="relative z-10 flex flex-col gap-2 overflow-hidden mask-linear-fade">
                            {/* Row 1 - Scroll Left */}
                            <div className="flex gap-4 items-center animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
                                {[
                                    "HIMATIKA.png", "UIN saizu.png", "amikom pwt.png", "emailkomp.png", "fastikom.png",
                                    "fikom hmpti.png", "fr ump.png", "genetika.png", "hima ilkom.png", "himafortic.png",
                                    "himanifo.png", "himapro ti.png", "himaskom undip.png", "himatek boyolali.png", "himatekno umpwr.png"
                                ].map((logo, i) => (
                                    <div key={`r1-${i}`} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                                        <img src={`/image/logo-hima/${logo}`} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                                {[
                                    "HIMATIKA.png", "UIN saizu.png", "amikom pwt.png", "emailkomp.png", "fastikom.png",
                                    "fikom hmpti.png", "fr ump.png", "genetika.png", "hima ilkom.png", "himafortic.png",
                                    "himanifo.png", "himapro ti.png", "himaskom undip.png", "himatek boyolali.png", "himatekno umpwr.png"
                                ].map((logo, i) => (
                                    <div key={`r1-dup-${i}`} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                                        <img src={`/image/logo-hima/${logo}`} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>

                            {/* Row 2 - Scroll Right */}
                            <div className="flex gap-4 items-center animate-scroll whitespace-nowrap hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                                {[
                                    "himati unw.png", "himatif umnu.png", "himatif ums.png", "himatif uss.png", "himtibipa.png",
                                    "hmdti udinus.png", "hmif pwt.png", "hmpi peradaban.png", "hmpsif.png", "hmpti FTI.png",
                                    "hmptsi.png", "hmse ti telkom.png", "hmti udinus.png", "hmti unika.png", "mikroptik.png"
                                ].map((logo, i) => (
                                    <div key={`r2-${i}`} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                                        <img src={`/image/logo-hima/${logo}`} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                                {[
                                    "himati unw.png", "himatif umnu.png", "himatif ums.png", "himatif uss.png", "himtibipa.png",
                                    "hmdti udinus.png", "hmif pwt.png", "hmpi peradaban.png", "hmpsif.png", "hmpti FTI.png",
                                    "hmptsi.png", "hmse ti telkom.png", "hmti udinus.png", "hmti unika.png", "mikroptik.png"
                                ].map((logo, i) => (
                                    <div key={`r2-dup-${i}`} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                                        <img src={`/image/logo-hima/${logo}`} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>

                            {/* Row 3 - Scroll Left */}
                            <div className="flex gap-4 items-center animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
                                {[
                                    "pnc.png", "slamte sri.png", "stt rongolawe.png", "tegal 2.png", "tegal.png",
                                    "uinws.png", "undip.png", "unimus himafor.png", "unissula.png", "univ brebes.png",
                                    "uns himaster.png", "unsoed.png", "unwahas.png", "upgris.png"
                                ].map((logo, i) => (
                                    <div key={`r3-${i}`} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                                        <img src={`/image/logo-hima/${logo}`} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                                {[
                                    "pnc.png", "slamte sri.png", "stt rongolawe.png", "tegal 2.png", "tegal.png",
                                    "uinws.png", "undip.png", "unimus himafor.png", "unissula.png", "univ brebes.png",
                                    "uns himaster.png", "unsoed.png", "unwahas.png", "upgris.png"
                                ].map((logo, i) => (
                                    <div key={`r3-dup-${i}`} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-2 flex-shrink-0 shadow-sm overflow-hidden">
                                        <img src={`/image/logo-hima/${logo}`} alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
