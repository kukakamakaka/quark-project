"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Twitter,
    Github,
    MessageSquare,
    Share2,
    ArrowRight,
    Command
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full bg-[#020202] pt-20 pb-10 overflow-hidden font-['Montserrat',sans-serif] border-none">

            {/* 1. BRAND GRADIENT GLOW (Evervault Style) */}
            <div
                className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[250px] opacity-25 blur-[120px] pointer-events-none z-0"
                style={{
                    background: "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)"
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* UPPER PART: BRAND & QUICK NEWSLETTER */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3BFF] to-[#5C24FF] rounded-lg rotate-45 opacity-20 group-hover:opacity-100 transition-all duration-500" />
                                <Command className="text-white relative z-10" size={20} />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white uppercase italic">Quark</span>
                        </Link>
                        <p className="text-white/30 text-[12px] font-semibold max-w-[240px] leading-relaxed uppercase tracking-wider">
                            Building the <span className="text-white/60">decentralized</span> intelligence layer.
                        </p>
                    </div>

                    {/* COMPACT NEWSLETTER - Optimized for Tablet & Desktop */}
                    <div className="relative group w-full md:max-w-md lg:w-auto mt-6 lg:mt-0">
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FF3BFF]/20 to-[#5C24FF]/20 rounded-2xl blur-md opacity-40 group-hover:opacity-100 transition-opacity" />

                        <div className="relative bg-[#050505]/60 backdrop-blur-3xl border border-white/5 rounded-2xl p-1.5 flex items-center justify-between gap-2">
                            <input
                                type="email"
                                placeholder="STAY UPDATED..."
                                className="bg-transparent border-none px-4 py-2 text-[10px] text-white focus:outline-none w-full font-black placeholder:text-white/10 uppercase tracking-widest min-w-[120px]"
                            />

                            <button
                                className="whitespace-nowrap px-6 py-2.5 rounded-xl text-white text-[9px] font-black tracking-[0.2em] uppercase transition-all hover:scale-[1.05] active:scale-95 flex items-center gap-2 flex-shrink-0"
                                style={{
                                    background: "linear-gradient(90deg, #FF3BFF 0%, #5C24FF 100%)",
                                    boxShadow: "0 4px 15px rgba(255, 59, 255, 0.3)"
                                }}
                            >
                                JOIN <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>


                </div>

                {/* MIDDLE PART: NAVIGATION LINKS */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-t border-white/5 pt-12 mb-12">
                    <div className="space-y-6">
                        <h4 className="text-white/20 font-bold text-[9px] uppercase tracking-[0.4em]">Navigation</h4>
                        <ul className="space-y-3">
                            {["Smart Contracts", "Services", "Solutions"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-all text-xs font-bold hover:translate-x-1 block uppercase tracking-tight">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white/20 font-bold text-[9px] uppercase tracking-[0.4em]">Resources</h4>
                        <ul className="space-y-3">
                            {["Roadmap", "Whitepaper", "Documentation"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-all text-xs font-bold hover:translate-x-1 block uppercase tracking-tight">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white/20 font-bold text-[9px] uppercase tracking-[0.4em]">Company</h4>
                        <ul className="space-y-3">
                            {["About Us", "Our Team", "Careers"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-all text-xs font-bold hover:translate-x-1 block uppercase tracking-tight">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white/20 font-bold text-[9px] uppercase tracking-[0.4em]">Legal</h4>
                        <ul className="space-y-3">
                            {["Privacy Policy", "Terms of Use", "Security"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-all text-xs font-bold hover:translate-x-1 block uppercase tracking-tight">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. Socials (Ultra-Premium Glass Morphism - Mobile Adaptive) */}
                    <div className="flex flex-col items-center lg:items-end justify-center lg:justify-end col-span-full lg:col-span-1 mt-10 lg:mt-0">
                        <div className="flex gap-3 md:gap-4 justify-center">
                            {[
                                { icon: <Github size={22} />, href: "#", label: "GitHub" },
                                { icon: <MessageSquare size={22} />, href: "#", label: "Discord" },
                                { icon: <Share2 size={22} />, href: "#", label: "Reddit" },
                                { icon: <Twitter size={22} />, href: "#", label: "Twitter" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.1,
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center relative group transition-all"
                                >
                                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-white/[0.2]" />

                                    <div className="absolute inset-[2px] rounded-[10px] md:rounded-[14px] bg-gradient-to-br from-white/[0.05] to-transparent opacity-50" />

                                    <div className="relative z-10 text-white/40 group-hover:text-white transition-colors duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] [&>svg]:w-5 md:[&>svg]:w-[22px] [&>svg]:h-5 md:[&>svg]:h-[22px]">
                                        {social.icon}
                                    </div>

                                    <div
                                        className="absolute -inset-[1px] rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] md:blur-sm -z-10"
                                        style={{
                                            background: "linear-gradient(45deg, #FF3BFF, #5C24FF)",
                                            padding: "1px"
                                        }}
                                    />

                                    <div
                                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 -z-20"
                                        style={{ background: "linear-gradient(90deg, #FF3BFF, #5C24FF)" }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* BOTTOM PART: METADATA */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[9px] tracking-[0.4em] font-black text-white/10 uppercase">
                        <p>© {currentYear} QUARK FOUNDATION.</p>
                        <span className="w-1 h-1 rounded-full bg-white/5" />
                        <p>ASTANA // KAZAKHSTAN</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
