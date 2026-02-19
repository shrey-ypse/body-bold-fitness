"use client";

import { use, useState, useEffect } from "react";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem("bbf_blog_data");
        if (savedData) {
            setAllPosts(JSON.parse(savedData));
        } else {
            setAllPosts(BLOG_POSTS);
        }
        setIsLoaded(true);
    }, []);

    const post = allPosts.find(p => p.slug === resolvedParams.slug);

    if (!isLoaded) return null;

    if (!post) {
        return (
            <div className="min-h-screen bg-background-dark flex items-center justify-center p-6 font-lexend">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Article Not Found</h1>
                    <Link href="/blog" className="text-primary hover:underline font-bold uppercase tracking-widest text-xs">Return to blogs</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-lexend">
            <Navbar />

            <main className="flex-grow pt-24 md:pt-32 pb-24">
                <article className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12"
                    >
                        <Link href="/blog" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                            <ChevronLeft size={16} /> Back to Blogs
                        </Link>
                    </motion.div>

                    <header className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap gap-4 items-center text-[10px] font-bold uppercase tracking-widest text-primary mb-8"
                        >
                            <span className="bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">{post.category}</span>
                            <div className="flex items-center gap-2 text-white/40">
                                <Calendar size={14} /> {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-white/40">
                                <Clock size={14} /> {post.readingTime}
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-12 dark:text-white"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 border border-white/5"
                        >
                            <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
                        </motion.div>
                    </header>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-p:text-white/60 prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tighter prose-strong:text-primary max-w-none"
                    >
                        <div className="space-y-8 bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/5 leading-relaxed text-base md:text-xl text-white/70">
                            {post.content.split('\n\n').map((para, i) => {
                                if (para.startsWith('# ')) return <h1 key={i} className="text-3xl md:text-5xl font-bold mt-12 mb-6">{para.replace('# ', '')}</h1>;
                                if (para.startsWith('## ')) return <h2 key={i} className="text-2xl md:text-4xl font-bold mt-10 mb-5">{para.replace('## ', '')}</h2>;
                                if (para.startsWith('- ')) {
                                    return (
                                        <ul key={i} className="space-y-4 my-8">
                                            {para.split('\n').map((li, j) => (
                                                <li key={j} className="flex gap-4 items-start">
                                                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                                                    {li.replace('- ', '')}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return <p key={i}>{para}</p>;
                            })}
                        </div>
                    </motion.div>

                    <footer className="mt-20 pt-16 border-t border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-black text-xl text-primary">BB</div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Written By</p>
                                    <p className="text-xl font-bold uppercase tracking-tight">{post.author}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Body Bold Expert Panel</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-white/20 border border-white/10 px-4 py-2 rounded-lg">#{tag}</span>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-24 p-12 md:p-16 rounded-[4rem] bg-primary text-black flex flex-col md:flex-row items-center justify-between gap-12"
                        >
                            <div className="max-w-xl text-center md:text-left">
                                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-6">Want To Build <br /> Your Own Gym?</h3>
                                <p className="text-sm md:text-lg font-bold uppercase tracking-widest opacity-60">Consult with our Hyderabad experts for space planning and gear selection.</p>
                            </div>
                            <Link
                                href="/#showroom"
                                className="bg-black text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
                            >
                                Get Expert Roadmap <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </footer>
                </article>
            </main>

            <Footer />
        </div>
    );
}
