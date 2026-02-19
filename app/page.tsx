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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Essentials />
        <Philosophy />
        <Bundles />
        <ProductShowcase />
        <Testimonials />
        <BlogPreview />
        <Showroom />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
