"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/products";

export const Showroom = () => {
    // Google Maps Embed URL (Shaikpet area for context)
    const mapBaseUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.163351234567!2d78.3970!3d17.4100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96ced7b60707%3A0xe5a3c6be43c7b2a4!2sB%20B%20F%20STORE%20(Body%20Bold%20Fitness%20Store)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

    // Google Maps Direct Link
    const directLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_DETAILS.address)}`;

    return (
        <section id="community" className="py-24 md:py-32 bg-background-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full premium-gradient opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">The Showroom</span>
                        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] dark:text-white mb-10">
                            VISIT THE <br /> <span className="text-primary">CENTRAL HUB.</span>
                        </h2>

                        <div className="space-y-8 md:space-y-12">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Location</h4>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                                        {BUSINESS_DETAILS.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Hours</h4>
                                    <p className="text-white/60 text-sm md:text-base">
                                        Open Daily: 10:00 AM – 9:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Direct Contact</h4>
                                    <p className="text-white/60 text-sm md:text-base">
                                        +91 93924 88297
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={directLink}
                            target="_blank"
                            className="inline-flex items-center gap-4 bg-primary text-black font-extrabold uppercase tracking-widest px-10 py-5 rounded-2xl mt-12 hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/20 text-xs md:text-sm"
                        >
                            Get Directions <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5"
                    >
                        <iframe
                            src={mapBaseUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125"
                        />
                        <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
