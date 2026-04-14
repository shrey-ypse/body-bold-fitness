"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
    {
        question: "Where is Body Bolt Fitness Store located in Hyderabad?",
        answer: "Our main showroom is located in Shaikpet, conveniently accessible from Jubilee Hills, Manikonda, and Gachibowli. You can visit us to test the equipment before you buy."
    },
    {
        question: "Do you offer doorstep delivery and installation?",
        answer: "Yes! We provide professional delivery and installation services across all of Hyderabad. Our expert technicians ensure your machine is set up correctly and safely in your home or gym."
    },
    {
        question: "Is the equipment sold at Body Bolt authentic?",
        answer: "Absolutely. Body Bolt Fitness Store is a trusted provider of premium, high-performance fitness equipment. Every product in our collection is strictly vetted for quality and comes with our official service guarantee and full brand support."
    },
    {
        question: "What is the warranty on fitness machines?",
        answer: "Most of our cardio equipment (Treadmills, Ellipticals) comes with a specific frame, motor, and parts warranty depending on the model. We also provide dedicated post-warranty service support."
    },
    {
        question: "Can I get my gym equipment serviced if it stops working?",
        answer: "Yes, we have a specialized repair and maintenance team in Hyderabad. We service all major brands, not just the ones sold at our store. You can book a service visit via WhatsApp."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="py-24 bg-background-dark" />;


    return (
        <section className="py-24 md:py-32 bg-background-dark relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <HelpCircle className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Trust & Transparency</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] dark:text-white mb-6">
                        GOT <span className="text-primary">QUESTIONS?</span>
                    </h2>
                    <p className="text-white/40 font-medium uppercase tracking-widest text-xs">
                        Everything you need to know about our service in Hyderabad
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl border transition-all duration-500 ${
                                openIndex === index 
                                ? "bg-white/5 border-primary/20" 
                                : "bg-transparent border-white/5 hover:border-white/10"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className="text-sm md:text-lg font-bold dark:text-white/90 uppercase tracking-tight">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    className={`w-5 h-5 text-primary transition-transform duration-500 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`} 
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 md:px-8 md:pb-8 text-xs md:text-sm text-white/50 leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
