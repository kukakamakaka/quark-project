"use client";

import Image from 'next/image';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        // overflow-hidden экраннан ештеңенің шығып кетпеуін қамтамасыз етеді
        <main className="relative h-screen w-full bg-[#020202] text-white overflow-hidden flex flex-col">
            <Header />

            <section className="relative flex-1 w-full flex flex-col items-center">



                {/* 2. IMAGE CONTAINER - Бұл блок қозғалмайды (mt-auto) */}
                <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[35vh] lg:h-[50vh] mt-auto">
                    {/* Glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <Image
                            src="/glow.png"
                            alt="Background Glow"
                            fill
                            className="object-bottom object-contain brightness-125 saturate-150 scale-125"
                            priority
                        />
                    </div>

                    {/* Robot */}
                    <motion.div className="relative w-full h-full">
                        <Image
                            src="/robot.png"
                            alt="Quark AI Robot"
                            fill
                            className="object-bottom object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}