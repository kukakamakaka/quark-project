"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Advantages = () => {
    return (
        <section className="relative w-full py-24 bg-[#020202] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5C24FF]/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 flex flex-col items-center">

                    {/* Liquid Glass Badge */}
                    <div className="relative inline-flex items-center group overflow-hidden rounded-full p-[1.5px] isolate mb-8">
                        {/* Glow effect */}
                        <div className="absolute inset-px bg-gradient-to-r from-purple-600/30 via-[#FF3BFF]/20 to-cyan-500/30 blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />

                        {/* Badge Container */}
                        <div className="relative px-6 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-3xl flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,59,255,0.2)]">
                            <div className="absolute inset-px bg-gradient-to-tr from-[#FF3BFF]/10 via-white/5 to-cyan-400/10 scale-125 opacity-70 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000" />

                            {/* Liquid Dot */}
                            <div className="relative w-2 h-2 rounded-full bg-[#FF3BFF] shadow-[0_0_12px_#FF3BFF] after:absolute after:inset-px after:bg-white/40 after:rounded-full after:blur-[1px]" />

                            <span className="relative z-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.5em] bg-gradient-to-b from-[#FF3BFF] via-[#E0A8FF] to-[#FF3BFF] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,59,255,0.4)]">
                Features
            </span>
                        </div>
                    </div>

                    {/* Optimized Typography */}
                    <h2 className="text-[28px] md:text-[42px] font-montserrat font-bold tracking-tight leading-[1.1]">
        <span className="text-white">
            Powerful features to simplify
        </span>
                        <br />
                        <span className="bg-gradient-to-r from-white/40 via-white/60 to-white/20 bg-clip-text text-transparent">
            your web building experience
        </span>
                    </h2>

                </div>

                {/* Bento Grid */}


                <div className="flex overflow-x-auto md:grid md:grid-cols-6 gap-6 pb-12 md:pb-0 scrollbar-hide snap-x snap-mandatory px-6 -mx-6 md:px-0 md:mx-0">

                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="min-w-[85vw] md:min-w-full md:col-span-3 h-[380px] md:h-[520px] snap-center relative rounded-[32px] md:rounded-[40px] bg-black border border-white/[0.05] overflow-hidden group p-6 md:p-12"                    >
                        <div className="absolute inset-0 bg-black z-0" />

                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="relative inline-flex items-center group/badge overflow-hidden rounded-full p-[1.2px] isolate mb-8 self-start">
                                <div className="absolute inset-px bg-gradient-to-r from-fuchsia-600/40 via-purple-500/20 to-fuchsia-400/40 blur-sm opacity-60 group-hover/badge:opacity-100 transition duration-1000" />

                                <div className="relative px-5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex items-center gap-2.5 shadow-[0_0_15px_rgba(232,121,249,0.15)]">

                                    <div className="absolute inset-px bg-gradient-to-tr from-fuchsia-500/10 via-white/5 to-transparent opacity-70 group-hover/badge:opacity-100 transition-opacity duration-1000" />

                                    <div className="relative w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef] after:absolute after:inset-px after:bg-white/30 after:rounded-full after:blur-[0.5px]" />

                                    <span className="relative z-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] bg-gradient-to-b from-fuchsia-300 via-white to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(217,70,239,0.3)]">
            Core Logic
        </span>
                                </div>
                            </div>

                            <h3 className="text-[42px] md:text-[52px] font-montserrat font-bold text-white tracking-tight leading-[1.1] mb-6">
                                AI-Powered <br />
                                <span className="text-white/20 group-hover:text-white transition-colors duration-1000">Design Flow</span>
                            </h3>

                            <p className="text-white/30 max-w-[340px] text-[17px] leading-relaxed group-hover:text-white/50 transition-colors duration-700 font-medium">
                                Intelligent suggestions that adapt to your unique style and brand identity flawlessly.
                            </p>
                        </div>

                        <div className="absolute inset-0 z-10">

                            <div className="absolute inset-0 z-20 pointer-events-none
            bg-[radial-gradient(circle_at_bottom_right,#00000000_10%,#000000_75%)]"
                            />

                            <div className="absolute inset-y-0 left-0 w-1/2 z-25 bg-gradient-to-r from-black via-black/40 to-transparent" />

                            <motion.div
                                initial={{ opacity: 0, scale: 1.1, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                whileHover={{ scale: 1.04, x: -5, y: -5 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute bottom-[-60px] right-[-60px] w-[110%] h-[500px]"
                            >
                                <Image
                                    src="/ai-mockup.png"
                                    alt="AI Intelligence"
                                    fill
                                    className="object-contain object-right-bottom saturate-[1.3] brightness-[1.05]"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="min-w-[85vw] md:min-w-full md:col-span-3 h-[380px] md:h-[520px] snap-center relative rounded-[32px] md:rounded-[40px] bg-black border border-white/[0.05] overflow-hidden group p-6 md:p-12"                    >
                        {/* 1. Нағыз қара фон (Absolute Black) */}
                        <div className="absolute inset-0 bg-black z-0" />

                        {/* 2. Мәтін қабаты (Z-index жоғары) */}
                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            {/* Liquid Glass Badge: Advantages (Blue Version) */}
                            <div className="relative inline-flex items-center group/badge overflow-hidden rounded-full p-[1.2px] isolate mb-8 self-start">
                                {/* 1. Сыртындағы жұмсақ Blue жарқыл */}
                                <div className="absolute inset-px bg-gradient-to-r from-blue-600/40 via-cyan-500/20 to-blue-400/40 blur-sm opacity-60 group-hover/badge:opacity-100 transition duration-1000" />

                                {/* 2. Badge Container */}
                                <div className="relative px-5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex items-center gap-2.5 shadow-[0_0_15px_rgba(59,130,246,0.15)]">

                                    {/* Анимацияланған ішкі сұйықтық */}
                                    <div className="absolute inset-px bg-gradient-to-tr from-blue-500/10 via-white/5 to-transparent opacity-70 group-hover/badge:opacity-100 transition-opacity duration-1000" />

                                    {/* Blue Liquid Indicator Dot */}
                                    <div className="relative w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] after:absolute after:inset-px after:bg-white/30 after:rounded-full after:blur-[0.5px]" />

                                    <span className="relative z-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] bg-gradient-to-b from-blue-300 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
                Advantages
            </span>
                                </div>
                            </div>

                            <h3 className="text-[42px] md:text-[52px] font-montserrat font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Customizable <br />
                                <span className="text-white/30 group-hover:text-white transition-colors duration-700">Templates</span>
                            </h3>

                            <p className="text-white/40 max-w-[320px] text-[17px] leading-relaxed group-hover:text-white/60 transition-colors duration-500 font-medium">
                                Professional layouts that you can easily adjust to reflect your brand's unique identity.
                            </p>
                        </div>

                        <div className="absolute inset-0 z-10">

                            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/40 to-transparent w-[60%]" />
                            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-transparent h-[50%]" />

                            <motion.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, x: 10 }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                                className="absolute bottom-[-50px] right-[-50px] w-[100%] h-[450px] mix-blend-lighten"
                            >
                                <Image
                                    src="/templates-mockup.png"
                                    alt="Templates Mockup"
                                    fill
                                    className="object-contain object-right-bottom saturate-150 brightness-110"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#3B82F6]/10 blur-[100px] rounded-full z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="min-w-[85vw] md:min-w-full md:col-span-2 h-[380px] md:h-[420px] snap-center relative rounded-[24px] md:rounded-[32px] bg-black border border-white/[0.08] overflow-hidden group p-6 md:p-8"                    >
                        <div className="absolute inset-0 bg-black z-0" />

                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="relative inline-flex items-center group/badge overflow-hidden rounded-full p-[1.2px] isolate mb-8 self-start">
                                <div className="absolute inset-px bg-gradient-to-r from-cyan-600/40 via-teal-500/20 to-cyan-400/40 blur-sm opacity-60 group-hover/badge:opacity-100 transition duration-1000" />

                                <div className="relative px-5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex items-center gap-2.5 shadow-[0_0_15px_rgba(34,211,238,0.15)]">

                                    <div className="absolute inset-px bg-gradient-to-tr from-cyan-500/10 via-white/5 to-transparent opacity-70 group-hover/badge:opacity-100 transition-opacity duration-1000" />

                                    <div className="relative w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] after:absolute after:inset-px after:bg-white/30 after:rounded-full after:blur-[0.5px]" />

                                    <span className="relative z-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] bg-gradient-to-b from-cyan-200 via-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
                Key Metrics
            </span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-montserrat font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                                SEO Tools <br />
                                <span className="text-white/40 group-hover:text-white transition-colors duration-700">Built-In</span>
                            </h3>

                            <p className="text-white/50 max-w-[240px] text-[15px] leading-relaxed group-hover:text-white/80 transition-colors duration-500 font-medium drop-shadow-md">
                                Predictive analytics that drive your organic growth flawlessly.
                            </p>
                        </div>

                        <div className="absolute inset-0 z-10">

                            <div className="absolute inset-0 z-20 pointer-events-none
            bg-[radial-gradient(circle_at_60%_60%,transparent_40%,#000000_95%)]"
                            />

                            <div className="absolute inset-y-0 left-0 w-1/2 z-25 bg-gradient-to-r from-black via-black/60 to-transparent" />

                            <motion.div
                                initial={{ opacity: 0, scale: 1.05 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src="/seo-prediction.png"
                                    alt="SEO ML Analysis"
                                    fill
                                    className="object-cover object-center saturate-[1.1] brightness-[0.8] group-hover:brightness-[1.1] group-hover:saturate-[1.4] transition-all duration-700"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[100px] rounded-full z-5 opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="min-w-[85vw] md:min-w-full md:col-span-2 h-[380px] md:h-[420px] snap-center relative rounded-[24px] md:rounded-[32px] bg-black border border-white/[0.08] overflow-hidden group p-6 md:p-8"                    >
                        <div className="absolute inset-0 bg-black z-0" />

                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="relative inline-flex items-center group/badge overflow-hidden rounded-full p-[1.2px] isolate mb-6 self-start">
                                <div className="absolute inset-px bg-gradient-to-r from-blue-700/40 via-blue-500/20 to-indigo-400/40 blur-sm opacity-60 group-hover/badge:opacity-100 transition duration-1000" />

                                <div className="relative px-5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex items-center gap-2.5 shadow-[0_0_15px_rgba(37,99,235,0.15)]">

                                    <div className="absolute inset-px bg-gradient-to-tr from-blue-600/10 via-white/5 to-transparent opacity-70 group-hover/badge:opacity-100 transition-opacity duration-1000" />

                                    <div className="relative w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_10px_#2563eb] after:absolute after:inset-px after:bg-white/30 after:rounded-full after:blur-[0.5px]" />

                                    <span className="relative z-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] bg-gradient-to-b from-blue-200 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(37,99,235,0.3)]">
                Ecosystem
            </span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-montserrat font-bold text-white tracking-tight mb-2">
                                Seamless <br />
                                <span className="text-white/20 group-hover:text-white transition-colors duration-1000">Integrations</span>
                            </h3>

                            <p className="text-white/40 max-w-[240px] text-[15px] leading-relaxed group-hover:text-white/60 transition-colors duration-500 font-medium">
                                Connect your favorite tools and automate your entire workflow flawlessly.
                            </p>
                        </div>

                        <div className="absolute inset-0 z-10">

                            <div className="absolute inset-0 z-20 pointer-events-none
            bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)]"
                            />

                            <div className="absolute inset-y-0 left-0 w-2/3 z-25 bg-gradient-to-r from-black via-black/80 to-transparent" />


                            <motion.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src="/HOME.jpeg"
                                    alt="Integrations"
                                    fill
                                    className="object-cover object-center saturate-[1.2] brightness-[0.6] group-hover:brightness-[0.9] transition-all duration-1000"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>



                    {/* Card 5 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="min-w-[85vw] md:min-w-full md:col-span-2 h-[380px] md:h-[420px] snap-center relative rounded-[24px] md:rounded-[32px] bg-black border border-white/[0.08] overflow-hidden group p-6 md:p-8"                    >
                        <div className="absolute inset-0 bg-black z-0" />

                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="relative inline-flex items-center group/badge overflow-hidden rounded-full p-[1.2px] isolate mb-6 self-start">
                                <div className="absolute inset-px bg-gradient-to-r from-purple-700/40 via-purple-500/20 to-fuchsia-400/40 blur-sm opacity-60 group-hover/badge:opacity-100 transition duration-1000" />

                                <div className="relative px-5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl flex items-center gap-2.5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">

                                    <div className="absolute inset-px bg-gradient-to-tr from-purple-500/10 via-white/5 to-transparent opacity-70 group-hover/badge:opacity-100 transition-opacity duration-1000" />

                                    <div className="relative w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] after:absolute after:inset-px after:bg-white/30 after:rounded-full after:blur-[0.5px]" />

                                    <span className="relative z-10 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] bg-gradient-to-b from-purple-200 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(168,85,247,0.3)]">
                Adaptability
            </span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-montserrat font-bold text-white tracking-tight mb-2">
                                Fully <br />
                                <span className="text-white/20 group-hover:text-white transition-colors duration-1000">Responsive</span>
                            </h3>

                            <p className="text-white/40 max-w-[240px] text-[15px] leading-relaxed group-hover:text-white/60 transition-colors duration-500 font-medium">
                                Your interface looks flawless on every device, from mobile to desktop.
                            </p>
                        </div>

                        <div className="absolute inset-0 z-10">

                            <div className="absolute inset-0 z-20 pointer-events-none
            bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)]"
                            />

                            <div className="absolute inset-y-0 left-0 w-2/3 z-25 bg-gradient-to-r from-black via-black/80 to-transparent" />

                            <motion.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src="/Des.jpeg"
                                    alt="Responsive Design Screens"
                                    fill
                                    className="object-cover object-center saturate-[1.1] brightness-[0.6] group-hover:brightness-[0.9] transition-all duration-1000"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Advantages;
