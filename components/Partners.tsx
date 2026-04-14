"use client";

import { motion } from "framer-motion";

const PARTNERS = [
    { name: "Body Bolt", role: "Fitness Store" },
    { name: "Quality", role: "ISI Certified" },
    { name: "Warranty", role: "Official Support" },
    { name: "Hyderabad", role: "Local Logistics" },
    { name: "Google", role: "5.0 Rated Store" }
];

import { useState, useEffect } from "react";

export const Partners = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="py-24 bg-background-dark" />;

    return (

        <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {PARTNERS.map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center group">
                            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter dark:text-white group-hover:text-primary transition-colors">
                                {partner.name}
                            </span>
                            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] mt-1 text-white/40">
                                {partner.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
