"use client";

import { PRODUCTS, getWhatsAppUrl } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon, X } from "lucide-react";

function ShopContent() {
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [localProducts, setLocalProducts] = useState(PRODUCTS);
    const categories = ["all", "strength", "cardio", "services"];

    useEffect(() => {
        const savedData = localStorage.getItem("bbf_vault_data");
        if (savedData) {
            setLocalProducts(JSON.parse(savedData));
        }

        const cat = searchParams.get("cat");
        if (cat && categories.includes(cat)) {
            setFilter(cat);
        }
    }, [searchParams]);

    const filteredProducts = localProducts.filter((product) => {
        const matchesCategory = filter === "all" || product.categorySlug === filter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <header className="mb-10 md:mb-16">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-primary font-bold mb-3 block">Complete Collection</span>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase dark:text-white leading-none">The Arsenal</h1>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative group">
                                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-dark/40 dark:text-white/40 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search gear..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-neutral-100 dark:bg-neutral-dark/40 border border-neutral-dark/5 dark:border-white/5 rounded-2xl py-3.5 pl-11 pr-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary/50 transition-all w-full sm:w-64"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <X className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 md:px-8 py-3 rounded-2xl text-[10px] md:text-xs font-extrabold uppercase tracking-widest border transition-all whitespace-nowrap transform-gpu ${filter === cat
                                    ? "bg-primary border-primary text-black shadow-lg shadow-primary/20 scale-105"
                                    : "bg-white dark:bg-neutral-dark/20 border-neutral-dark/5 dark:border-white/5 dark:text-white/70 hover:border-primary/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group flex flex-col bg-white dark:bg-neutral-dark/10 border border-neutral-dark/5 dark:border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/20 transition-all shadow-sm hover:shadow-2xl transform-gpu"
                            >
                                <Link href={`/products/${product.id}`} className="block aspect-square overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    {product.badge && (
                                        <span className="absolute top-6 left-6 bg-primary text-black font-extrabold text-[8px] md:text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                            {product.badge}
                                        </span>
                                    )}
                                </Link>
                                <div className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                                            {product.category}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold dark:text-white group-hover:text-primary transition-colors line-clamp-1 tracking-tight">{product.name}</h3>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl md:text-2xl font-bold dark:text-white/90">{product.price}</span>
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                        <a
                                            href={getWhatsAppUrl(product.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-4 bg-neutral-dark dark:bg-white text-white dark:text-black rounded-2xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center shadow-lg"
                                        >
                                            Enquire Now
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-32">
                        <h3 className="text-2xl font-bold text-white/20 uppercase tracking-widest">No gear found matching your criteria</h3>
                        <button onClick={() => { setFilter("all"); setSearchQuery(""); }} className="mt-4 text-primary font-bold uppercase text-xs tracking-widest hover:underline">Reset Filters</button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function ShopPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />
            <Suspense fallback={<div className="min-h-screen bg-background-dark" />}>
                <ShopContent />
            </Suspense>
            <Footer />
        </div>
    );
}
