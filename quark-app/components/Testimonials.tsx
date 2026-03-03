"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    { id: "01", text: "Aurion keeps us organized and on top of our budget. Love it!", author: "Daniel Harnes", initials: "DH", role: "Strategic CFO", accent: "#BD00FF" },
    { id: "02", text: "With Aurion, I finally have a clear understanding of my store's finances. The profit and loss tracking tools have saved me so much time.", author: "Ryan Palmer", initials: "RP", role: "Founder @ Trendy", accent: "#00E0FF" },
    { id: "03", text: "I finally feel in control of my finances. The interface is incredibly intuitive. Thank you!", author: "Mark Julio", initials: "MJ", role: "Entrepreneur", accent: "#FF3BFF" },
    { id: "04", text: "The best financial management platform I've ever used. Highly recommend to everyone.", author: "Sarah Jenkins", initials: "SJ", role: "Director", accent: "#ffffff" }
];

const Testimonials = () => {
    const [cards, setCards] = useState(reviews);

    const handleNext = () => {
        setCards((prev) => {
            const newArray = [...prev];
            const first = newArray.shift();
            if (first) newArray.push(first);
            return newArray;
        });
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-[#020202] overflow-hidden font-sans">
            {/* SEO Микроразметка  */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Quark AI",
                        "review": reviews.map(r => ({
                            "@type": "Review",
                            "reviewBody": r.text,
                            "author": { "@type": "Person", "name": r.author }
                        }))
                    })
                }}
            />
            <motion.img
                src="/decor-top-right.webp"
                alt=""
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[40%] max-w-[500px] opacity-30 pointer-events-none z-0 object-contain"
            />
            <motion.img
                src="/decor-bottom-left.webp"
                alt=""
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[50%] max-w-[600px] opacity-25 pointer-events-none z-0 object-contain"
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* LIQUID GLASS BADGE - EXACT MATCH WITH FEATURES STYLE */}
                <div className="relative inline-flex items-center group overflow-hidden rounded-full p-[1.5px] isolate mb-12">
                    <div className="absolute inset-px bg-gradient-to-r from-purple-600/30 via-[#FF3BFF]/20 to-cyan-500/30 blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />

                    <div className="relative px-6 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-3xl flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,59,255,0.2)]">
                        <div className="absolute inset-px bg-gradient-to-tr from-[#FF3BFF]/10 via-white/5 to-cyan-400/10 scale-125 opacity-70 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000" />

                        <div className="relative w-2 h-2 rounded-full bg-[#FF3BFF] shadow-[0_0_12px_#FF3BFF] after:absolute after:inset-px after:bg-white/40 after:rounded-full after:blur-[1px]" />

                        <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.5em] bg-gradient-to-b from-[#FF3BFF] via-[#E0A8FF] to-[#FF3BFF] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,59,255,0.4)]">
            Feedback
        </span>
                    </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-20 text-center select-none">
                    What our <span className="italic font-serif text-white/60">users say.</span>
                </h2>

                {/* --- STACKING CARD SLIDER (NO OPACITY EFFECT) --- */}
                <div className="relative w-full h-[450px] md:h-[420px]">
                    <AnimatePresence initial={false} mode="popLayout">
                        {cards.slice(0, 3).reverse().map((rev, index) => {
                            const i = 2 - index;
                            return (
                                <motion.div
                                    key={rev.id}
                                    layout
                                    initial={false}
                                    animate={{
                                        y: i * 30,
                                        scale: 1 - i * 0.05,
                                        opacity: 1,
                                        zIndex: 50 - i,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.23, 1, 0.32, 1]
                                    }}
                                    className="absolute inset-0 origin-bottom will-change-transform"
                                >
                                    <div
                                        onClick={i === 0 ? handleNext : undefined}
                                        className="relative h-full w-full p-10 md:p-14 flex flex-col justify-between overflow-hidden cursor-pointer rounded-[50px] bg-white/[0.04] backdrop-blur-[40px] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group"
                                    >
                                        {/* Glass Highlight Layer */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

                                        <div className="flex justify-between items-center relative z-10 mb-6">
                                            <span className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase italic">{rev.id} // GLOBAL_DATA</span>
                                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: rev.accent, boxShadow: `0 0 20px ${rev.accent}` }} />
                                        </div>

                                        <p className="text-white text-[24px] md:text-[34px] leading-tight font-light italic flex-grow flex items-center relative z-10 mb-10 tracking-tight">
                                            “{rev.text}”
                                        </p>

                                        <div className="flex items-center justify-between pt-8 border-t border-white/10 relative z-10">
                                            <div className="flex items-center gap-5">
                                                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-[12px] font-bold text-white uppercase tracking-tighter">
                                                    {rev.initials}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-bold text-white uppercase tracking-wider">{rev.author}</span>
                                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1.5 italic font-medium">{rev.role}</span>
                                                </div>
                                            </div>

                                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/15 transition-all">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Subtle Glow */}
                                        <div className="absolute -bottom-20 -right-20 w-80 h-80 blur-[120px] opacity-[0.08] pointer-events-none" style={{ backgroundColor: rev.accent }} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* INDICATORS */}
                <div className="flex gap-4 mt-20 relative z-10">
                    {reviews.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-700 ${cards[0].id === reviews[i].id ? "w-16 bg-[#FF3BFF] shadow-[0_0_15px_#FF3BFF]" : "w-3 bg-white/10"}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

