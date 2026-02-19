"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { PRODUCTS, getWhatsAppUrl } from "@/data/products";

export const ProductShowcase = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 md:py-32 bg-background-dark overflow-hidden relative content-visibility-auto">
            <div className="absolute top-0 left-0 w-full h-full premium-gradient opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block"
                    >
                        New Arrivals
                    </motion.span>
                    <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                        LATEST <br /> <span className="text-white/20">EDITIONS</span>
                    </h2>
                </div>
                <div className="flex justify-center md:justify-end space-x-4 mb-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-500 transform-gpu"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-500 transform-gpu"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex space-x-6 md:space-x-8 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-12"
            >
                {PRODUCTS.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.05 }}
                        className="min-w-[280px] md:min-w-[450px] aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl transform-gpu"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000 will-change-transform"
                            loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none">
                            <span className="text-primary font-bold uppercase tracking-widest text-[8px] md:text-[9px] mb-2 md:mb-3 block">
                                {product.category}
                            </span>
                            <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight uppercase mb-4 md:mb-6 leading-tight">
                                {product.name}
                            </h3>
                            <div className="flex items-center justify-between gap-4 pointer-events-auto">
                                <span className="text-lg md:text-2xl font-bold text-white/90">{product.price}</span>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href={getWhatsAppUrl(product.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 md:px-6 py-2.5 md:py-3 bg-white text-black text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest rounded-xl hover:bg-primary transition-colors whitespace-nowrap"
                                    >
                                        Enquire
                                    </a>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-white md:group-hover:bg-primary md:group-hover:text-black transition-all duration-500 transform md:group-hover:rotate-45"
                                    >
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
