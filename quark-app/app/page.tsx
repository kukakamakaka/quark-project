"use client";

import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#020202] text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative z-10 pt-[280px] md:pt-[290px] px-6 flex flex-col items-center">

                {/* Фигма: Background Gradient Text */}
                <h1 className="w-full max-w-[1071px] text-center font-montserrat font-medium text-[clamp(32px,7vw,65px)] leading-[100%] tracking-[0.02em] uppercase bg-main-gradient bg-clip-text text-transparent animate-gradient">
                    The Best Website Ever
                </h1>

                {/* Фигма: Scalable text */}
                <h2 className="font-montserrat font-medium text-[clamp(36px,8vw,72px)] leading-[100%] -mt-4 md:-mt-9 text-white">
                    Scalable.
                </h2>

                {/* Фигма: Description */}
                <p className="w-full max-w-[900px] mt-6 text-center font-montserrat font-normal text-[clamp(14px,2vw,17px)] leading-[1.7] tracking-[0.05em] text-white/90">
                    Our technology performing fast blockchain (120K TPS) and it has
                    <br className="hidden md:block" />
                    guaranteed AI-based data security. Proof of Stake, its consensus
                    <br className="hidden md:block" />
                    algorithm enables unlimited speeds.
                </p>

                {/* Фигма: Robots Image */}
                <div className="relative mt-10 w-full max-w-[1400px] aspect-[14/6]">
                    <Image
                        src="/robots.png" // Бұл сурет public/ папкасында болуы керек
                        alt="Robots"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Фигма: Background Glow (Group 4) */}
                <div className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none">
                    <Image
                        src="/group4.png" // Глоу эффектісі
                        alt="Glow background"
                        fill
                        className="object-cover opacity-60"
                    />
                </div>
            </section>
        </main>
    );
}