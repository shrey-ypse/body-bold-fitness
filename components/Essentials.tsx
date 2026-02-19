"use client";

import { PRODUCTS } from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Essentials = () => {
    const essentialProducts = PRODUCTS.slice(0, 4);

    return (
        <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark overflow-hidden content-visibility-auto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-xl mx-auto md:mx-0">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block"
                        >
                            The Arsenal
                        </motion.span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] dark:text-white">
                            CORE <br /> <span className="text-neutral-dark/20 dark:text-white/20">EQUIPMENT</span>
                        </h2>
                    </div>
                    <Link
                        href="/shop"
                        className="group flex items-center justify-center md:justify-start space-x-4 md:space-x-6 text-[10px] font-bold uppercase tracking-[0.3em] dark:text-white"
                    >
                        <span>View All Gear</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center md:group-hover:bg-primary md:group-hover:border-primary md:group-hover:text-black transition-all duration-500 transform-gpu">
                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </div>
                    </Link>
                </div>

                <div className="masonry-grid">
                    {essentialProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-dark/40 transform-gpu ${product.isLarge ? "masonry-item-large" :
                                product.isTall ? "masonry-item-tall" : ""
                                }`}
                        >
                            <Link href={`/products/${product.id}`} className="block h-full w-full">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-1000 will-change-transform"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-primary font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2">{product.category}</span>
                                    <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight uppercase leading-none mb-3 md:mb-4">{product.name}</h3>
                                    <div className="flex items-center space-x-3 md:space-x-4">
                                        <span className="text-white/60 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Learn More</span>
                                        <ArrowRight className="text-primary w-3 h-3 md:w-3.5 md:h-3.5" />
                                    </div>
                                </div>

                                {product.badge && (
                                    <div className="absolute top-6 md:top-8 right-6 md:right-8 bg-primary text-black text-[8px] md:text-[9px] font-extrabold uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-2xl">
                                        {product.badge}
                                    </div>
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
