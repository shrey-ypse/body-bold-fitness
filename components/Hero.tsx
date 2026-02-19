"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile, { passive: true });
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Fixed easing type for Framer Motion
    const panelTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any };

    return (
        <section className="relative h-[100dvh] min-h-[600px] md:min-h-[800px] w-full overflow-hidden bg-background-dark">
            <div className="flex flex-col md:flex-row h-full">
                {/* Strength Panel */}
                <Link href="/shop?cat=strength" className="contents">
                    <motion.div
                        initial={false}
                        animate={isLoaded ? {
                            width: isMobile ? "100%" : "50%",
                            height: isMobile ? "50%" : "100%"
                        } : {}}
                        whileHover={!isMobile ? { width: "60%" } : {}}
                        transition={panelTransition}
                        className="relative group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/5 transform-gpu"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 will-change-transform"
                            alt="Strength Training"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 md:via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-2 md:mb-4"
                            >
                                Elite Performance
                            </motion.span>
                            <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-4 md:mb-8 leading-[0.9]">
                                PURE <br /> STRENGTH
                            </h2>
                            <div className="flex items-center space-x-4 text-white group-hover:text-primary transition-colors">
                                <div className="h-[1px] w-8 md:w-12 bg-white/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Shop Collection</span>
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* Cardio Panel */}
                <Link href="/shop?cat=cardio" className="contents">
                    <motion.div
                        initial={false}
                        animate={isLoaded ? {
                            width: isMobile ? "100%" : "50%",
                            height: isMobile ? "50%" : "100%"
                        } : {}}
                        whileHover={!isMobile ? { width: "60%" } : {}}
                        transition={panelTransition}
                        className="relative group cursor-pointer overflow-hidden transform-gpu"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 will-change-transform"
                            alt="Cardio Training"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/80 via-black/20 md:via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex flex-col justify-end items-end p-8 md:p-20 text-right">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-2 md:mb-4"
                            >
                                Endurance Engine
                            </motion.span>
                            <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-4 md:mb-8 leading-[0.9]">
                                LIMITLESS <br /> CARDIO
                            </h2>
                            <div className="flex items-center space-x-4 text-white group-hover:text-primary transition-colors">
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Explore Gear</span>
                                <div className="h-[1px] w-8 md:w-12 bg-white/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>

            {/* Floating Center Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block pointer-events-none">
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={isLoaded ? { scale: 1, rotate: 0 } : {}}
                        className="w-40 h-40 glass rounded-full flex items-center justify-center p-8 text-center border-primary/20 backdrop-blur-3xl transform-gpu"
                    >
                        <span className="text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] leading-tight">
                            Body Bold <br /> <span className="text-primary text-xl">2026</span> <br /> Edition
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
