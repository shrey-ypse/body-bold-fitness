"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import { BUNDLES } from "@/data/site";
import { getWhatsAppUrl } from "@/data/products";

export const Bundles = () => {
    return (
        <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 text-center md:text-left">
                    <div className="max-w-xl mx-auto md:mx-0">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block"
                        >
                            Complete Solutions
                        </motion.span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] dark:text-white">
                            CURATED <br /> <span className="text-neutral-dark/20 dark:text-white/20">BUNDLES</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {BUNDLES.map((bundle, index) => (
                        <motion.div
                            key={bundle.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transform-gpu"
                        >
                            <img src={bundle.image} alt={bundle.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                                <span className="bg-primary text-black font-extrabold text-[8px] md:text-[10px] uppercase tracking-widest px-4 py-2 rounded-full w-fit mb-6 shadow-xl">Best Value</span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-4 leading-none">{bundle.name}</h3>
                                <p className="text-white/70 text-sm md:text-lg mb-8 max-w-md">{bundle.description}</p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {bundle.items.map(item => (
                                        <span key={item} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary/60 border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-lg">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between gap-6">
                                    <span className="text-2xl md:text-4xl font-bold text-white">{bundle.price}</span>
                                    <a
                                        href={getWhatsAppUrl(`Bundle: ${bundle.name}`)}
                                        target="_blank"
                                        className="bg-white text-black font-extrabold uppercase tracking-widest px-8 md:px-10 py-4 md:py-5 rounded-2xl hover:bg-primary transition-all flex items-center gap-4 text-xs shadow-2xl"
                                    >
                                        Enquire Bundle <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
