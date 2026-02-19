"use client";

import { useState, use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PRODUCTS, getWhatsAppUrl } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronLeft, Check, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [allProducts, setAllProducts] = useState(PRODUCTS);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem("bbf_vault_data");
        if (savedData) {
            setAllProducts(JSON.parse(savedData));
        }
        setIsLoaded(true);
    }, []);

    const product = allProducts.find((p) => p.id === resolvedParams.id);
    const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (product && !activeImage) {
            setActiveImage(product.image);
        }
    }, [product, activeImage]);

    if (!isLoaded) {
        return <div className="min-h-screen bg-background-dark" />;
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-dark text-white p-6">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">Product Not Found</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="text-primary hover:underline flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs"
                    >
                        <ChevronLeft size={16} /> Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-neutral-dark/60 dark:text-neutral-light/60 hover:text-primary transition-colors mb-6 md:mb-8"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /> Back
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        {/* Image Section */}
                        <div className="space-y-4 md:space-y-6">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative aspect-square rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900"
                            >
                                <img
                                    src={activeImage || product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {product.badge && (
                                    <span className="absolute top-4 md:top-8 left-4 md:left-8 bg-primary text-black font-extrabold text-[8px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                                        {product.badge}
                                    </span>
                                )}
                            </motion.div>

                            {product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-3 md:gap-4">
                                    {product.images.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImage(img)}
                                            className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all ${activeImage === img ? "border-primary scale-95" : "border-transparent opacity-60 hover:opacity-100"
                                                }`}
                                        >
                                            <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col"
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-2 md:mb-4">
                                {product.category}
                            </span>
                            <h1 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6 dark:text-white uppercase leading-none">
                                {product.name}
                            </h1>
                            <p className="text-2xl md:text-4xl font-bold text-primary mb-6 md:mb-8">{product.price}</p>

                            <p className="text-base md:text-lg leading-relaxed text-neutral-dark/70 dark:text-neutral-light/70 mb-8 md:mb-10">
                                {product.fullDescription}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 md:mb-12">
                                <div>
                                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 dark:text-white">Key Features</h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-neutral-dark/60 dark:text-neutral-light/60">
                                                <Check className="text-primary mt-0.5 shrink-0 w-4 h-4 md:w-5 md:h-5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {Object.keys(product.specs).length > 0 && (
                                    <div>
                                        <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 dark:text-white">Specifications</h3>
                                        <div className="space-y-3">
                                            {Object.entries(product.specs).map(([key, value], i) => (
                                                <div key={i} className="flex justify-between border-b border-neutral-dark/10 dark:border-white/10 pb-2">
                                                    <span className="text-[9px] uppercase tracking-widest opacity-50">{key}</span>
                                                    <span className="text-xs md:text-sm font-medium">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a
                                href={getWhatsAppUrl(product.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-4 bg-primary text-black font-extrabold uppercase tracking-widest py-5 md:py-6 rounded-2xl hover:bg-white transition-all transform md:hover:-translate-y-1 shadow-xl text-xs md:text-sm"
                            >
                                <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                                Enquire via WhatsApp
                            </a>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
