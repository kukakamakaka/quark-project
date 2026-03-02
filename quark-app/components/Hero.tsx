"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center">

            {/* 1. TEXT CONTENT  */}
            <div className="absolute top-0 w-full z-30 flex flex-col items-center text-center
                pt-[25vh] sm:pt-[180px] md:pt-[230px] px-6 md:px-6">

                <h2
                    style={{
                        background: 'linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent'
                    } as React.CSSProperties}
                    className="text-[50px] md:text-[73px] font-montserrat font-normal uppercase leading-[0.99] tracking-[0.04em] text-center mx-auto mb-4 inline-block w-full transform scale-y-[1] md:scale-y-[0.9]"
                >
                    The Best Website Ever
                </h2>

                <h1 className="text-[45px] md:text-[80px] font-montserrat font-[400] w-full max-w-[471px] mx-auto leading-none tracking-[0.02em] text-white inline-block transform scale-y-[0.85] md:scale-y-[0.86] mb-5 -mt-4 md:-mt-6">
                    Scalable.
                </h1>

                <p className="text-[16px] md:text-[19px] font-montserrat font-normal w-full max-w-[390px] md:max-w-[623px] leading-[23px] md:leading-[32px] tracking-[0.30px] text-white/75 text-center mx-auto mb-[40px] px-6 -mt-4 md:-mt-4 inline-block transform scale-y-[0.9] md:scale-y-[0.92]">
                    Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security.
                    Proof of Stake, its consensus algorithm enables unlimited speeds.
                </p>

                <div className="flex flex-row gap-3 md:gap-4 -mt-4 md:-mt-5 z-40">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative p-[2px] rounded-full overflow-hidden flex items-center justify-center bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] shadow-[0_0_20px_rgba(255,59,255,0.3)] hover:shadow-[0_0_30px_rgba(255,59,255,0.6)] transition-shadow duration-300"
                    >
                        <div className="bg-[#020202] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-montserrat font-medium text-[18px] md:text-[15px] relative z-10">
                            Get started
                        </div>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#000" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-white rounded-full font-montserrat font-medium text-[18px] md:text-[15px] text-white bg-[#020202] transition-all duration-300 relative z-10"
                    >
                        Read more
                    </motion.button>
                </div>
            </div>

            {/* 2. IMAGE CONTAINER (Робот) */}
            <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[35vh] lg:h-[50vh] mt-auto">
                <div className="absolute inset-0 pointer-events-none">
                    <Image src="/glow.webp" alt="Background Glow" fill className="object-bottom object-contain brightness-125 saturate-150 scale-125" priority />
                </div>
                <motion.div className="relative w-full h-full">
                    <Image src="/robot.webp" alt="Quark AI Robot" fill className="object-bottom object-contain" priority />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;