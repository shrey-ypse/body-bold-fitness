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
  title: "Body Bolt Fitness Store | Premium Performance Equipment Hyderabad",
  description: "Professional grade fitness equipment in Hyderabad at Body Bolt Fitness Store. Shop our curated collection of strength and performance gear. Premier local source for the best gym equipment in Telangana.",
  keywords: ["fitness", "gym equipment hyderabad", "body bolt treadmill", "bodybolt store", "strength training hyderabad", "gym repair services"],
  authors: [{ name: "Body Bolt Fitness Store" }],
  openGraph: {
    title: "Body Bolt Fitness Store",
    description: "Premium Performance Equipment in Hyderabad",
    type: "website",
    url: "https://bodyboltfitness.store",
    siteName: "Body Bolt Fitness Store",
  },
  alternates: {
    canonical: "https://bodyboltfitness.store",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff3131",
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
    "image": "https://bodyboltfitness.store/logo-full.png",
    "@id": "https://bodyboltfitness.store",
    "url": "https://bodyboltfitness.store",
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
      "opens": "09:00",
      "closes": "22:00"
    },

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${lexend.variable} font-display antialiased`} suppressHydrationWarning>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
