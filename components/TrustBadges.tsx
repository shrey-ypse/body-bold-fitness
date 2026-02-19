"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Settings, HeartPulse } from "lucide-react";
import { TRUST_FEATURES } from "@/data/site";

const iconMap = {
    ShieldCheck,
    Award,
    Settings,
    HeartPulse
};

export const TrustBadges = () => {
    return (
        <section className="py-20 md:py-24 bg-background-light dark:bg-background-dark border-y border-neutral-dark/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                    {TRUST_FEATURES.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold dark:text-white uppercase tracking-tight mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-[10px] md:text-xs text-neutral-dark/60 dark:text-white/40 font-medium uppercase tracking-[0.1em] leading-relaxed max-w-[200px] mx-auto">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
