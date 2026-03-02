"use client";
import { motion } from "framer-motion";

const marqueeTexts = [
    "Fast Blockchain",
    "AI Security",
    "120K TPS",
    "Decentralized",
    "Proof of Stake",
    "Unlimited Speeds",
];

const Marquee = () => {
    return (
        <div className="relative w-full bg-[#020202] py-10 overflow-hidden border-y border-white/5">
            {/* Мәтін ағыны */}
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-10 items-center px-10"
                >
                    {/* Мәтінді екі рет қайталаймыз (шексіз цикл үшін) */}
                    {[...marqueeTexts, ...marqueeTexts].map((text, index) => (
                        <div key={index} className="flex items-center gap-10">
              <span className="text-[24px] md:text-[40px] font-montserrat font-bold uppercase tracking-wider text-white/20 hover:text-white/80 transition-colors duration-500">
                {text}
              </span>
                            {/* Сөйлем арасындағы декор (жұлдызша немесе нүкте) */}
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FF3BFF] to-[#5C24FF]" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Шеттерін көлеңкемен жұмсарту (Fade effect) */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10" />
        </div>
    );
};

export default Marquee;