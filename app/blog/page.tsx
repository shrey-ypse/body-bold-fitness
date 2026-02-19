"use client";

import { useState, useEffect } from "react";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const savedData = localStorage.getItem("bbf_blog_data");
        if (savedData) {
            setPosts(JSON.parse(savedData));
        } else {
            setPosts(BLOG_POSTS);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <header className="mb-16 md:mb-24 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
                        >
                            The Knowledge Vault
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8 dark:text-white"
                        >
                            INSIGHTS & <br /><span className="text-primary italic">PERFORMANCE</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-2xl mx-auto text-neutral-dark/60 dark:text-white/40 text-sm md:text-lg leading-relaxed uppercase tracking-widest font-medium"
                        >
                            Expert guides on gym maintenance, training science, and building the ultimate home gym in Hyderabad.
                        </motion.p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col glass-dark border-white/5 rounded-[3rem] overflow-hidden hover:border-primary/20 transition-all shadow-2xl h-full"
                            >
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-primary text-black px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={12} className="text-primary" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={12} className="text-primary" />
                                            {post.readingTime}
                                        </div>
                                    </div>

                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase mb-6 group-hover:text-primary transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors mt-auto"
                                    >
                                        Read Protocol <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
