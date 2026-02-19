import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { BUSINESS_DETAILS } from "@/data/products";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Body Bold Fitness | Premium Performance Equipment Hyderabad",
  description: "Professional grade Aerofit fitness equipment in Hyderabad. Shop our curated collection of strength and performance gear. Authorized dealer for the best gym equipment in Telangana.",
  keywords: ["fitness", "gym equipment hyderabad", "aerofit treadmill", "bodybold", "strength training hyderabad", "gym repair services"],
  authors: [{ name: "Body Bold Fitness" }],
  openGraph: {
    title: "Body Bold Fitness",
    description: "Premium Performance Equipment in Hyderabad",
    type: "website",
    url: "https://bodyboldfitness.store",
    siteName: "Body Bold Fitness",
  },
  alternates: {
    canonical: "https://bodyboldfitness.store",
  },
};

export const viewport: Viewport = {
  themeColor: "#13ec37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    "name": BUSINESS_DETAILS.name,
    "image": "https://bodyboldfitness.store/logo-full.png",
    "@id": "https://bodyboldfitness.store",
    "url": "https://bodyboldfitness.store",
    "telephone": BUSINESS_DETAILS.whatsappNumber,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6-22/2, 1st floor Sai Nagar colony, beside A1 Bawarchi",
      "addressLocality": "Shaikpet, Hyderabad",
      "addressRegion": "TS",
      "postalCode": "500104",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4100,
      "longitude": 78.3970
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${lexend.variable} font-display antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
