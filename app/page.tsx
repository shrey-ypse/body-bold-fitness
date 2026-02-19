import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Essentials } from "@/components/Essentials";
import { Philosophy } from "@/components/Philosophy";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Testimonials } from "@/components/Testimonials";
import { Showroom } from "@/components/Showroom";
import { TrustBadges } from "@/components/TrustBadges";
import { Bundles } from "@/components/Bundles";
import { BlogPreview } from "@/components/BlogPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-black scroll-smooth">
      <Navbar />
      <main className="overflow-x-hidden transform-gpu">
        <Hero />
        <div className="content-visibility-auto"><TrustBadges /></div>
        <div className="content-visibility-auto"><Essentials /></div>
        <div className="content-visibility-auto"><Philosophy /></div>
        <div className="content-visibility-auto"><Bundles /></div>
        <div className="content-visibility-auto"><ProductShowcase /></div>
        <div className="content-visibility-auto"><Testimonials /></div>
        <div className="content-visibility-auto"><BlogPreview /></div>
        <div className="content-visibility-auto"><Showroom /></div>
        <div className="content-visibility-auto"><CTA /></div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
