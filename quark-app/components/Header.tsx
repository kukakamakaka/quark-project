"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const navItems = ['Smart Contracts', 'Services', 'Solutions', 'Roadmap', 'Whitepaper'];
    const socialIcons = [FaGithub, FaDiscord, FaReddit, FaTwitter];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full transition-all duration-300 z-[1000] ${
                isOpen ? 'bg-transparent' : isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}>
                {/* GRID */}
                <div className="max-w-[1728px] mx-auto h-[80px] lg:h-[100px] px-8 lg:px-12 2xl:px-[275px] grid grid-cols-2 lg:grid-cols-3 items-center">

                    {/* --- LOGO --- */}
                    <div className="flex justify-start">
                        <Link
                            href="/"
                            className="font-montserrat text-white uppercase font-medium text-[18px] tracking-[0.10em] hover:opacity-80 transition-all leading-none"
                            style={{ fontStretch: '110%' }}
                        >
                            SITE NAME
                        </Link>
                    </div>

                    {/* 2. НАВИГАЦИЯ */}
                    <nav className="hidden lg:flex justify-center items-center gap-[25px] xl:gap-[40px] whitespace-nowrap">
                        {navItems.map((item) => (
                            <Link key={item} href="#" className="font-inter text-[14px] text-white hover:opacity-70 transition-all tracking-[-0.03em]">
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* 3. ИКОНКИ / БУРГЕР (Моб) */}
                    <div className="flex justify-end items-center">
                        {/* Десктоп иконки */}
                        <div className="hidden lg:flex items-center gap-3.5 text-white">
                            {socialIcons.map((Icon, i) => (
                                <Icon key={i} size={16} className="cursor-pointer hover:text-white/60 transition-colors" />
                            ))}
                        </div>

                        {/* Мобильный бутерброд */}
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-[7px] p-2 outline-none">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                                className="w-8 h-[1.5px] bg-white rounded-full origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                                className="w-8 h-[1.5px] bg-white rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                                className="w-8 h-[1.5px] bg-white rounded-full origin-center"
                            />
                        </button>
                    </div>

                </div>
            </header>

            {/* MOBILE MENU OVERLAY  */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#050505] z-[900] flex flex-col lg:hidden"
                    >
                        <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full -z-10" />
                        <div className="flex-1 flex flex-col justify-center px-10 pt-20">
                            <p className="text-white/20 text-[10px] uppercase tracking-[0.6em] font-medium mb-12">Navigation</p>
                            <div className="flex flex-col gap-8">
                                {navItems.map((item, i) => (
                                    <motion.div key={item} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.08 }}>
                                        <Link href="#" onClick={() => setIsOpen(false)} className="text-[34px] font-montserrat font-light text-white/90 hover:text-purple-400">
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="px-10 pb-12">
                            <div className="h-[1px] w-full bg-white/5 mb-10" />
                            <div className="flex flex-col gap-6 text-white">
                                <div className="flex gap-8 items-center">
                                    {socialIcons.map((Icon, i) => (
                                        <Icon key={i} size={22} className="text-white/30 hover:text-white" />
                                    ))}
                                </div>
                                <p className="text-white/10 text-[10px] tracking-widest uppercase italic font-medium">© 2026 Quark Protocol</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
