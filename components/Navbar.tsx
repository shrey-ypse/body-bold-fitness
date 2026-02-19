"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/data/products";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearchClick = () => {
        router.push("/shop");
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6 transition-all duration-300 ${scrolled ? "py-2 md:py-3" : ""}`}>
            <div className="max-w-7xl mx-auto glass-dark rounded-2xl px-6 md:px-8 py-4 md:py-5 flex items-center justify-between shadow-2xl relative transform-gpu">
                <div className="flex items-center space-x-12">
                    <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter flex items-center group gap-2">
                        <span className="group-hover:text-primary transition-colors">BODY</span>
                        <span className="text-primary group-hover:text-white transition-colors">BOLD</span>
                        <span className="group-hover:text-primary transition-colors">FITNESS</span>
                    </Link>
                    <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                        <Link href="/shop?cat=strength" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Strength</Link>
                        <Link href="/shop?cat=cardio" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Cardio</Link>
                        <Link href="/shop" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Catalogue</Link>
                        <Link href="/blog" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Blogs</Link>
                        <Link href="/#community" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Community</Link>
                    </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-8">
                    <button
                        onClick={handleSearchClick}
                        className="text-white/70 hover:text-primary transition-colors hidden sm:block"
                        aria-label="Search"
                    >
                        <Search className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <Link href="/shop" className="p-2 text-white/70 hover:text-primary transition-colors relative group">
                        <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="absolute top-0 right-0 bg-primary text-black text-[8px] md:text-[9px] font-extrabold h-3 w-3 md:h-4 md:w-4 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">0</span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <Link
                        href={getWhatsAppUrl("Member Portal Access")}
                        target="_blank"
                        className="hidden lg:block bg-primary text-black text-[10px] font-extrabold uppercase tracking-[0.2em] px-6 py-3 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                    >
                        Member Portal
                    </Link>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 p-8 glass-dark rounded-3xl md:hidden flex flex-col space-y-8 text-center origin-top transform-gpu"
                        >
                            <Link onClick={() => setIsOpen(false)} href="/shop?cat=strength" className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-primary">Strength</Link>
                            <Link onClick={() => setIsOpen(false)} href="/shop?cat=cardio" className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-primary">Cardio</Link>
                            <Link onClick={() => setIsOpen(false)} href="/shop" className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-primary">Catalogue</Link>
                            <Link onClick={() => setIsOpen(false)} href="/blog" className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-primary">Blogs</Link>
                            <Link onClick={() => setIsOpen(false)} href="/#community" className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 hover:text-primary">Community</Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                href={getWhatsAppUrl("Member Portal Access")}
                                target="_blank"
                                className="bg-primary text-black text-[10px] font-extrabold uppercase tracking-[0.2em] px-6 py-4 rounded-2xl"
                            >
                                Member Portal
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
