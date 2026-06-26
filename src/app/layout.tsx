import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/shared/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxury-estate-demo.vercel.app"),

  title: {
    default: "Luxe Estates | Luxury Real Estate",
    template: "%s | Luxe Estates",
  },

  description:
    "Discover exceptional luxury homes, waterfront estates, penthouses, and exclusive properties with Luxe Estates.",

  keywords: [
    "luxury real estate",
    "luxury homes",
    "waterfront villas",
    "luxury villas",
    "exclusive properties",
    "premium real estate",
    "real estate agency",
    "luxury estates",
    "high-end homes",
  ],

  authors: [
    {
      name: "Luxe Estates",
    },
  ],

  creator: "Luxe Estates",
  publisher: "Luxe Estates",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxury-estate-demo.vercel.app",
    siteName: "Luxe Estates",
    title: "Luxe Estates | Luxury Real Estate",
    description:
      "Discover exceptional luxury homes, waterfront estates, penthouses, and exclusive properties with Luxe Estates.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luxury waterfront estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxe Estates | Luxury Real Estate",
    description:
      "Discover exceptional luxury homes, waterfront estates, penthouses, and exclusive properties with Luxe Estates.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}