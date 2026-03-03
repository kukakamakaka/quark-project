"use client";
import { motion } from "framer-motion";

const reviews = [
    { id: "01", text: "Aurion keeps us organized and on top of our budget. Love it!", author: "Daniel Harnes", initials: "DH", role: "Strategic CFO", span: "md:col-span-2", accent: "#BD00FF" },
    { id: "02", text: "With Aurion, I finally have a clear understanding of my store's finances. The profit and loss tracking tools have saved me so much time.", author: "Ryan Palmer", initials: "RP", role: "Founder @ Trendy", span: "md:col-span-4", accent: "#00E0FF" },
    { id: "03", text: "I finally feel in control of my finances. The interface is incredibly intuitive. Thank you!", author: "Mark Julio", initials: "MJ", role: "Entrepreneur", span: "md:col-span-3", accent: "#FF3BFF" },
    { id: "04", text: "The best financial management platform I've ever used. Highly recommend to everyone.", author: "Sarah Jenkins", initials: "SJ", role: "Director", span: "md:col-span-3", accent: "#ffffff" }
];

const Testimonials = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": reviews.map((rev, index) => ({
            "@type": "Review",
            "position": index + 1,
            "author": { "@type": "Person", "name": rev.author },
            "reviewBody": rev.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            }
        }))
    };

    return (

        <section className="relative w-full py-20 md:py-32 bg-[#020202] overflow-visible font-sans">

            {/* --- ДЕКОР ЭЛЕМЕНТТЕРІ (ЕКЕУІ ДЕ ҚАЙТТЫ) --- */}
            <motion.img
                src="/decor-top-right.webp"
                alt="decor-top"
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-56 md:w-96 opacity-40 pointer-events-none z-0 select-none"
            />

            <motion.img
                src="/decor-bottom-left.webp"
                alt="decor-bottom"
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -left-10 w-64 md:w-[500px] opacity-30 pointer-events-none z-0 select-none"
            />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="flex flex-col items-center text-center mb-16 md:mb-24">

                    {/* --- LIQUID GLASS BADGE (ҚАЙТА ЖӨНДЕЛДІ) --- */}
                    <div className="relative inline-flex items-center group overflow-hidden rounded-full p-[1.5px] isolate mb-8">
                        <div className="absolute inset-px bg-gradient-to-r from-purple-600/30 via-[#FF3BFF]/20 to-cyan-500/30 blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />
                        <div className="relative px-6 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-3xl flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,59,255,0.2)]">
                            <div className="absolute inset-px bg-gradient-to-tr from-[#FF3BFF]/10 via-white/5 to-cyan-400/10 scale-125 opacity-70 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000" />
                            <div className="relative w-2 h-2 rounded-full bg-[#FF3BFF] shadow-[0_0_12px_#FF3BFF] after:absolute after:inset-px after:bg-white/40 after:rounded-full after:blur-[1px]" />
                            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.5em] bg-gradient-to-b from-[#FF3BFF] via-[#E0A8FF] to-[#FF3BFF] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,59,255,0.4)]">
                                Feedback
                            </span>
                        </div>
                    </div>

                    {/* Silver Metallic Heading */}
                    <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white leading-tight select-none">
                        What our
                        <span className="relative inline-block ml-3 group">
                            <span className="bg-gradient-to-b from-white via-[#E2E2E2] to-[#404040] bg-clip-text text-transparent italic font-serif">
                                users say.
                            </span>
                            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                        </span>
                    </h2>
                </div>

                {/* --- BENTO GRID WITH MOBILE OPTIMIZATION --- */}
                <div className="flex flex-col md:grid md:grid-cols-6 gap-5">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`${rev.span} group relative h-full ${i % 2 === 0 ? "translate-x-0" : "max-md:translate-x-2"}`}
                        >
                            <div className="relative h-full w-full rounded-[30px] bg-[#080808]/40 border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 group-hover:bg-[#0C0C0C] group-hover:border-white/15 backdrop-blur-xl overflow-hidden shadow-2xl">

                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase italic">{rev.id} // LOG_DATA</span>
                                    <div className="w-1.5 h-1.5 rounded-full opacity-40 shadow-[0_0_10px_currentColor]" style={{ backgroundColor: rev.accent, color: rev.accent }} />
                                </div>

                                <p className="text-white/40 text-[18px] md:text-[21px] leading-snug tracking-tight transition-colors duration-700 group-hover:text-white/90 font-light italic">
                                    “{rev.text}”
                                </p>

                                <div className="mt-12 flex items-center gap-4 pt-6 border-t border-white/[0.04]">
                                    {/* Silver Initials Avatar */}
                                    <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-inner">
                                        <span className="text-[11px] font-bold text-white/30 group-hover:text-white/80 transition-colors uppercase tracking-tighter">
                                            {rev.initials}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[11px] font-bold text-white uppercase tracking-[0.1em]">{rev.author}</span>
                                        <span className="text-[9px] text-white/20 uppercase tracking-[0.2em] mt-1.5 font-black italic">
                                            {rev.role}
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-10 -right-10 w-32 h-32 blur-[70px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" style={{ backgroundColor: rev.accent }} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Decor */}
                <div className="mt-24 pt-10 border-t border-white/5 flex justify-center gap-12 opacity-10 select-none grayscale">
                    {['QUARTZ', 'THE VERGE', 'WIRED'].map(brand => (
                        <span key={brand} className="text-[10px] font-black tracking-[0.7em] text-white">{brand}</span>
                    ))}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>


    );
};

export default Testimonials;
