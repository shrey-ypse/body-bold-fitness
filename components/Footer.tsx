"use client";

import Link from "next/link";
import { BUSINESS_DETAILS } from "@/data/products";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-background-dark text-white pt-24 md:pt-32 pb-12 md:pb-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-16 md:mb-24">
                    <div className="text-center lg:text-left">
                        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tighter mb-6 md:mb-10 block">
                            BODY <span className="text-primary">BOLD</span> FITNESS
                        </Link>
                        <p className="text-base md:text-xl text-white/50 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 md:mb-12">
                            The premier source for high-performance fitness equipment in Hyderabad. <span className="text-white/80">Authorized Aerofit Dealer</span> engineering strength since 2026.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-500">
                                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
                        <div className="space-y-6 md:space-y-8 text-center sm:text-left">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Location</h4>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-white/60">
                                <MapPin className="shrink-0 sm:mt-1" size={18} />
                                <p className="text-xs md:text-sm leading-relaxed">{BUSINESS_DETAILS.address}</p>
                            </div>
                        </div>
                        <div className="space-y-6 md:space-y-8 text-center sm:text-left">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Contact</h4>
                            <div className="space-y-4 text-white/60">
                                <a href={`tel:${BUSINESS_DETAILS.whatsappNumber}`} className="flex items-center justify-center sm:justify-start space-x-4 text-xs md:text-sm hover:text-primary transition-colors">
                                    <Phone size={18} />
                                    <span>{BUSINESS_DETAILS.whatsappNumber}</span>
                                </a>
                                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="flex items-center justify-center sm:justify-start space-x-4 text-xs md:text-sm hover:text-primary transition-colors">
                                    <Mail size={18} />
                                    <span>{BUSINESS_DETAILS.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <p
                        className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30 text-center md:text-left cursor-default select-none"
                        onClick={(e) => {
                            if (e.detail === 3) {
                                window.location.href = '/admin';
                            }
                        }}
                    >
                        © 2026 B B F STORE. All rights reserved.
                    </p>
                    <div className="flex space-x-8 md:space-x-12 text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
