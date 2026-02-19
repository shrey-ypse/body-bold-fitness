"use client";

import { motion } from "framer-motion";

export const Philosophy = () => {
    return (
        <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 md:mb-8 block"
                        >
                            Our Foundation
                        </motion.span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 md:mb-12 dark:text-white">
                            BUILT <br /> TO <span className="text-primary">LAST.</span>
                        </h2>
                        <div className="space-y-6 md:space-y-8 text-base md:text-lg text-neutral-dark/70 dark:text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            <p>
                                At B B F STORE, we believe fitness equipment should be as resilient as the athletes who use it. Every piece in our collection is hand-selected for its structural integrity, ergonomic precision, and long-term durability.
                            </p>
                            <p>
                                We don't just sell machines; we provide the foundation for your physical evolution. Whether you are building a professional gym or a personal sanctuary, our gear is engineered to handle the most intensive training loads.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-neutral-dark/10 dark:border-white/10">
                            <div>
                                <span className="block text-3xl md:text-4xl font-bold dark:text-white mb-1 md:mb-2">5.0</span>
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-50">Google Rating</span>
                            </div>
                            <div>
                                <span className="block text-3xl md:text-4xl font-bold dark:text-white mb-1 md:mb-2">48+</span>
                                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-50">Expert Reviews</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl mt-8 lg:mt-0"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                            alt="Brand Philosophy"
                            className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
