"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowRight, Calendar } from "lucide-react";

export const BlogPreview = () => {
    // Show latest 3 posts
    const featuredPosts = BLOG_POSTS.slice(0, 3);

    return (
        <section className="py-24 md:py-32 bg-background-light dark:bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
                        >
                            Knowledge is Power
                        </motion.span>
                        <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] dark:text-white">
                            LATEST <br /><span className="text-neutral-dark/20 dark:text-white/20">BLOGS</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-all"
                    >
                        View Full Vault <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {featuredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                                <img
                                    src={post.image}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    alt={post.title}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-primary mb-4">
                                <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{post.category}</span>
                                <span className="text-white/30 flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                            </Link>

                            <p className="text-sm text-neutral-dark/60 dark:text-white/40 mb-8 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-colors"
                            >
                                Read Protocol <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
