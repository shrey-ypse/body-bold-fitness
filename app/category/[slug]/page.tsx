"use client";

import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, getWhatsAppUrl } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === resolvedParams.slug);

    if (categoryProducts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark text-white pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 uppercase">Category Not Found</h1>
                    <button onClick={() => router.push("/")} className="text-primary hover:underline">Back to Home</button>
                </div>
            </div>
        );
    }

    const categoryName = categoryProducts[0].category;

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <header className="mb-16">
                        <h1 className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4">Collection</h1>
                        <h2 className="text-6xl font-bold tracking-tighter uppercase dark:text-white">{categoryName}</h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {categoryProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col bg-white dark:bg-neutral-dark/30 border border-neutral-dark/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all shadow-sm hover:shadow-2xl"
                            >
                                <Link href={`/products/${product.id}`} className="block aspect-[4/5] overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {product.badge && (
                                        <span className="absolute top-6 left-6 bg-primary text-black font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded">
                                            {product.badge}
                                        </span>
                                    )}
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                                        <span className="text-white text-xs font-bold uppercase tracking-widest">View Details</span>
                                    </div>
                                </Link>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2 dark:text-white group-hover:text-primary transition-colors">{product.name}</h3>
                                    <p className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 mb-6 line-clamp-2">{product.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xl font-bold dark:text-primary">{product.price}</span>
                                        <a
                                            href={getWhatsAppUrl(product.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 bg-neutral-dark dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                                        >
                                            Enquire
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
