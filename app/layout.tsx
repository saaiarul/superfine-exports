import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Superfine Exports — Premium Dyed Fabrics, Exported Worldwide",
  description: "High-end B2B textile export house specializing in combed cotton twills, eco-viscose, poly-cotton uniform canvas, and European flax linen. OEKO-TEX & GOTS 6.0 certified.",
  keywords: [
    "Superfine Exports",
    "dyed cloth export company",
    "combed cotton twill supplier",
    "GOTS organic dyed fabric",
    "OEKO-TEX standard 100 fabric",
    "textile manufacturer India",
    "B2B fabric supplier",
    "continuous dyeing mill",
    "Arvind inspired textile export"
  ],
  authors: [{ name: "Superfine Exports Ltd." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1A33] text-[#F5F3EE] font-sans selection:bg-[#C9A227] selection:text-[#060D17]">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
