"use client";
import { motion } from "framer-motion";

const Marquee = () => {
    const items = ["Decentralized", "Secure AI", "120K TPS", "Low Latency", "Scalable", "Next-Gen"];

    return (
        <div className="relative w-full py-3 bg-[#050505] border-y border-white/5 overflow-hidden z-50">

            <motion.div
                animate={{ x: [0, -1200] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex gap-16 md:gap-24 whitespace-nowrap items-center"
            >
                {[...items, ...items, ...items].map((text, i) => (
                    <div key={i} className="flex items-center gap-16 md:gap-24">

                        <span className="text-[14px] md:text-[16px] font-montserrat font-medium uppercase tracking-[0.4em]
              bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              {text}
            </span>

                        <div className="w-[3px] h-[3px] rounded-full bg-white/20" />
                    </div>
                ))}
            </motion.div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20" />
        </div>
    );
};

export default Marquee;
