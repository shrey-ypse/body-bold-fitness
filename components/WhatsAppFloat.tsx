"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS_DETAILS } from "@/data/products";

export function WhatsAppFloat() {
    const whatsappUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello! I have a general enquiry about your products.")}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-[100] bg-primary text-black p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-white transition-colors duration-300"
        >
            <MessageCircle size={32} />
        </motion.a>
    );
}
