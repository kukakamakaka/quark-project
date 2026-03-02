"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Smart Contracts', 'Services', 'Solutions', 'Roadmap', 'Whitepaper'];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? 'h-[80px] bg-black/50 backdrop-blur-md' : 'h-[110px] bg-transparent'
        }`}>
            <div className="relative max-w-[1728px] mx-auto h-full">

                {/* 1. SITE NAME (QUARK) */}
                <div
                    style={{
                        position: 'absolute',
                        width: '135px',
                        height: '29px',
                        top: '50px',
                        left: '275px',
                        opacity: 1,
                    }}
                >
                    <Link
                        href="/"
                        className="font-montserrat transition-opacity hover:opacity-80"
                        style={{
                            fontFamily: 'var(--font-montserrat), sans-serif',
                            fontWeight: 500,
                            fontSize: '21px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textTransform: 'uppercase',
                            color: 'white',
                            display: 'block'
                        }}
                    >
                        SITE NAME
                    </Link>
                </div>

                {/* 2. NAVIGATION ITEMS */}
                <nav className="hidden lg:flex absolute top-[54px] left-[32.81%] w-[594px] h-[22px] flex items-center justify-center gap-[40px]">                    {['Smart Contracts', 'Services', 'Solutions', 'Roadmap', 'Whitepaper'].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                fontWeight: '400',
                                letterSpacing: '-0.03em',
                                color: 'white',
                                textDecoration: 'none',
                                WebkitFontSmoothing: 'antialiased',
                                opacity: 0.9
                            }}
                            className="hover:opacity-60 transition-opacity"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* 3. SOCIAL ICONS */}
                <div
                    className="hidden lg:flex absolute items-center justify-between text-white"
                    style={{
                        top: '55px',
                        left: '78%',
                        width: '110px',
                        height: '21px',
                    }}
                >
                    <FaGithub size={16} className="hover:text-white/70 cursor-pointer transition-colors" />
                    <FaDiscord size={16} className="hover:text-white/70 cursor-pointer transition-colors" />
                    <FaReddit size={16} className="hover:text-white/70 cursor-pointer transition-colors" />
                    <FaTwitter size={16} className="hover:text-white/70 cursor-pointer transition-colors" />
                </div>

            </div>
        </header>
    );
}