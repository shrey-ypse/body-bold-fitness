"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-black">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] mb-6 md:mb-8 block">The Inner Circle</span>
                    <h2 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85] mb-10 md:mb-12">
                        JOIN THE <br /> <span className="opacity-40">MOVEMENT.</span>
                    </h2>

                    <p className="text-base md:text-xl font-bold uppercase tracking-tight max-w-xl mx-auto mb-10 md:mb-16 opacity-70">
                        Get priority access to limited edition equipment drops and professional athlete insights.
                    </p>

                    <form
                        className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            className="flex-grow bg-black/5 border-2 border-black/10 rounded-xl md:rounded-2xl py-5 md:py-6 px-6 md:px-8 focus:outline-none focus:border-black placeholder:text-black/30 font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        <button
                            className="bg-black text-white px-8 md:px-10 py-5 md:py-6 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all transform md:hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-4"
                            type="submit"
                        >
                            Get Access <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </button>
                    </form>

                    <p className="mt-10 md:mt-12 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">
                        No spam. Only high-performance content.
                    </p>
                </motion.div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute -bottom-5 md:-bottom-10 left-0 w-full whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
                <span className="text-[25vw] md:text-[20vw] font-black uppercase leading-none">BODYBOLD</span>
            </div>
        </section>
    );
};
