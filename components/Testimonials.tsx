"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export const Testimonials = () => {
    return (
        <section className="py-24 md:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
                    >
                        Wall of Fame
                    </motion.span>
                    <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] dark:text-white mb-6">
                        TRUSTED BY <br /> <span className="text-primary">THE ELITE.</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-5 h-5 md:w-6 md:h-6 fill-primary text-primary" />
                        ))}
                        <span className="ml-2 font-bold dark:text-white/60">5.0 Star Google Rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-dark p-8 md:p-10 rounded-[2rem] relative group border-white/5 transform-gpu hover:border-primary/20 transition-all"
                        >
                            <Quote className="w-10 h-10 text-primary/10 absolute top-8 right-8" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold dark:text-white text-sm uppercase tracking-tight">{testimonial.name}</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-sm md:text-base text-neutral-dark/70 dark:text-white/60 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-6 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 w-full whitespace-nowrap opacity-[0.02] select-none pointer-events-none transform -translate-y-1/2">
                <span className="text-[30vw] font-black uppercase leading-none">REVIEWS</span>
            </div>
        </section>
    );
};
