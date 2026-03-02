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
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                        <span className="text-[11px] font-montserrat font-medium uppercase tracking-[0.5em] text-[#FF3BFF]">Features</span>
                    </div>
                    <h2 className="text-[35px] md:text-[55px] font-montserrat font-bold text-white tracking-tight leading-tight">
                        Powerful features to simplify your <br /> <span className="text-white/40">web building experience</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                    {/* Card 1: AI Assistance (Large - 3 cols) */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="md:col-span-3 h-[520px] relative rounded-[40px] bg-black border border-white/[0.05] overflow-hidden group p-12"
                    >
                        {/* 1. Таза қара фон (Ешқандай сұр реңксіз) */}
                        <div className="absolute inset-0 bg-black z-0" />

                        {/* 2. Мәтін қабаты (Z-index жоғары, суреттің астында қалмайды) */}
                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 backdrop-blur-md mb-8 self-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
                Core Logic
            </span>
                            </div>

                            <h3 className="text-[42px] md:text-[52px] font-montserrat font-bold text-white tracking-tight leading-[1.1] mb-6">
                                AI-Powered <br />
                                <span className="text-white/20 group-hover:text-white transition-colors duration-1000">Design Flow</span>
                            </h3>

                            <p className="text-white/30 max-w-[340px] text-[17px] leading-relaxed group-hover:text-white/50 transition-colors duration-700 font-medium">
                                Intelligent suggestions that adapt to your unique style and brand identity flawlessly.
                            </p>
                        </div>

                        {/* 3. СУРЕТ: Ешқандай "палево" жиексіз (Radial Masking) */}
                        <div className="absolute inset-0 z-10">

                            {/* РАДИАЛДЫ МАСКА: Суреттің жиектерін ортасынан бастап біртіндеп ҚАРА түске сіңіреді */}
                            <div className="absolute inset-0 z-20 pointer-events-none
            bg-[radial-gradient(circle_at_bottom_right,#00000000_10%,#000000_75%)]"
                            />

                            {/* Қосымша Soft Edge: Сол жақтан келетін жұмсақ көлеңке */}
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

                        {/* 4. Нәзік неонды Glow (Ambient Light) */}
                        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Card 2: Custom Templates (Large - 3 cols) */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="md:col-span-3 h-[520px] relative rounded-[40px] bg-black border border-white/[0.05] overflow-hidden group p-12"
                    >
                        {/* 1. Нағыз қара фон (Absolute Black) */}
                        <div className="absolute inset-0 bg-black z-0" />

                        {/* 2. Мәтін қабаты (Z-index жоғары) */}
                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/20 bg-black/50 backdrop-blur-md mb-8 self-start">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3B82F6]">Advantages</span>
                            </div>

                            <h3 className="text-[42px] md:text-[52px] font-montserrat font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Customizable <br />
                                <span className="text-white/30 group-hover:text-white transition-colors duration-700">Templates</span>
                            </h3>

                            <p className="text-white/40 max-w-[320px] text-[17px] leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                Professional layouts that you can easily adjust to reflect your brand's unique identity.
                            </p>
                        </div>

                        {/* 3. СУРЕТ: Сиқыр осында (Masking + Blending) */}
                        <div className="absolute inset-0 z-10">

                            {/* Градиентті маска: Суреттің сол жағы мен жоғарғы жағын МҮЛДЕМ өшіру */}
                            {/* Түсі тек BLACK болуы тиіс, сонда "ағармайды" */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/40 to-transparent w-[60%]" />
                            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-transparent h-[50%]" />

                            <motion.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, x: 10 }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                                className="absolute bottom-[-50px] right-[-50px] w-[100%] h-[450px] mix-blend-lighten"
                            >
                                {/* mix-blend-lighten: Кез келген сұр фонды өшіріп, тек жарық (неон) бөлігін қалдырады */}
                                <Image
                                    src="/templates-mockup.png"
                                    alt="Templates Mockup"
                                    fill
                                    className="object-contain object-right-bottom saturate-150 brightness-110"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* 4. Ambient Glow: Суреттің астынан шығатын жұмсақ көк сәуле */}
                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#3B82F6]/10 blur-[100px] rounded-full z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Card 3: SEO Built-In (Small - 2 cols) */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="md:col-span-2 h-[420px] relative rounded-[32px] bg-black border border-white/[0.08] overflow-hidden group p-8"
                    >
                        {/* 1. LAYER: Background */}
                        <div className="absolute inset-0 bg-black z-0" />

                        {/* 2. LAYER: Text Content */}
                        <div className="relative z-30 flex flex-col h-full pointer-events-none">
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8 self-start">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                Key Metrics
            </span>
                            </div>

                            <h3 className="text-3xl font-montserrat font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                                SEO Tools <br />
                                <span className="text-white/40 group-hover:text-white transition-colors duration-700">Built-In</span>
                            </h3>

                            <p className="text-white/50 max-w-[240px] text-[15px] leading-relaxed group-hover:text-white/80 transition-colors duration-500 font-medium drop-shadow-md">
                                Predictive analytics that drive your organic growth flawlessly.
                            </p>
                        </div>

                        {/* 3. LAYER: IMAGE */}
                        <div className="absolute inset-0 z-10">

                            {/* Masking to blend edges */}
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

                        {/* 4. Background Glow */}
                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[100px] rounded-full z-5 opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>

                    {/* Card 4: APIs (Small - 2 cols) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 h-[350px] relative rounded-[32px] bg-[#0A0A0A] border border-white/5 overflow-hidden group p-8 flex flex-col items-center justify-center text-center"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,36,255,0.15),transparent_70%)]" />
                        <div className="w-full h-[150px] relative mb-6">
                            <Image src="/api-icons.png" alt="APIs" fill className="object-contain animate-pulse" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">APIs and integrations</h3>
                        <p className="text-white/50 text-sm">Connect with favorite apps easily.</p>
                    </motion.div>

                    {/* Card 5: Responsive Design (Small - 2 cols) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 h-[350px] relative rounded-[32px] bg-[#0A0A0A] border border-white/5 overflow-hidden group p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Responsive Design</h3>
                        <div className="mt-12 w-full h-[180px] relative">
                            <Image src="/responsive.png" alt="Responsive" fill className="object-contain group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Advantages;