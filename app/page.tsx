"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Award, 
  Droplets, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  Layers 
} from "lucide-react";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { FabricCard } from "@/components/FabricCard";
import { FabricDetailModal } from "@/components/FabricDetailModal";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ContainerTrustSection } from "@/components/ContainerTrustSection";
import { GlobalReachMap } from "@/components/GlobalReachMap";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { TextReveal } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { FABRICS_DATA, Fabric } from "@/data/fabrics";
import { NEWS_DATA } from "@/data/news";

export default function HomePage() {
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  return (
    <div className="min-h-screen bg-[#0B1A33] text-[#F5F3EE] overflow-x-hidden">
      {/* 1. Full-Bleed Hero Banner */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=2000&q=80"
            alt="Superfine Exports Premium Dyed Fabrics Background"
            className="w-full h-full object-cover object-center filter brightness-65 scale-105 animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33] via-[#0B1A33]/80 to-[#0B1A33]/50" />
        </div>

        {/* Ambient Gold & Indigo Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#0F2342]/80 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#060D17]/90 border border-[#C9A227]/30 text-xs md:text-sm font-mono font-bold text-[#D4AF37] backdrop-blur-md mb-6 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span>CINEMATIC B2B TEXTILE EXPORT HOUSE</span>
            <span className="text-slate-500">•</span>
            <span>OEKO-TEX & GOTS CERTIFIED</span>
          </motion.div>

          <TextReveal
            as="h1"
            text="Superfine Exports — Premium Dyed Fabrics, Exported Worldwide"
            className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F3EE] leading-[1.08] max-w-5xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans font-normal"
          >
            Engineered for international fashion brands, workwear uniform houses, and garment exporters. Continuous vat dyeing, computerized spectrophotometer shade matching, and zero-liquid-discharge sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#060D17] bg-[#C9A227] hover:bg-[#D4AF37] shadow-xl shadow-[#C9A227]/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Request a Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/fabrics"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#F5F3EE] bg-[#0F2342] hover:bg-[#060D17] border border-[#C9A227]/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>View Fabric Catalogue</span>
                <Layers className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Strip Section */}
      <TrustStrip />

      {/* 3. Our Fabrics Section */}
      <section className="py-28 bg-[#F5F3EE] text-[#0B1A33] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="light"
            eyebrow="Export Catalogue Showcase"
            title="Our Premium Dyed Fabric Collections"
            subtitle="Explore our core fabric categories engineered for high colorfastness, minimal shrinkage, and superior hand feel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {FABRICS_DATA.slice(0, 4).map((fabric, idx) => (
              <FabricCard
                key={fabric.id}
                fabric={fabric}
                onSelect={(f) => setSelectedFabric(f)}
                index={idx}
                theme="light"
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <MagneticButton>
              <Link
                href="/fabrics"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B1A33] hover:bg-[#0F2342] text-[#F5F3EE] font-bold text-sm shadow-xl transition-all"
              >
                <span>Explore All 8+ Fabric Qualities & Filter Parameters</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (ESG Stats) */}
      <section className="py-28 bg-[#0B1A33] border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            eyebrow="Why Superfine Exports"
            title="Statistical Trust & Manufacturing Rigor"
            subtitle="Built on measurable quality benchmarks inspired by global ESG standards and continuous improvement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <StatCard
              numericValue={25000000}
              suffix="+"
              label="Annual Dyeing Capacity"
              description="Continuous vat and reactive dyeing lines processing over 25 million meters of fabric annually."
              badgeText="Capacity"
              icon={<Award className="w-5 h-5 text-[#D4AF37]" />}
              delay={0}
            />
            <StatCard
              numericValue={99.8}
              decimals={1}
              suffix="%"
              label="Color Match Accuracy"
              description="AI spectrophotometer shade matching ensuring Delta-E < 0.5 first-pass approval rate."
              badgeText="Lab Control"
              icon={<Sparkles className="w-5 h-5 text-[#D4AF37]" />}
              delay={0.1}
            />
            <StatCard
              numericValue={99.4}
              decimals={1}
              suffix="%"
              label="On-Time Shipping Rate"
              description="Guaranteed container dispatch timelines to European, US, and Middle Eastern ports."
              badgeText="Logistics"
              icon={<TrendingUp className="w-5 h-5 text-[#D4AF37]" />}
              delay={0.2}
            />
            <StatCard
              numericValue={98}
              suffix="%"
              label="ZLD Water Recycling"
              description="Zero Liquid Discharge effluent treatment plant recycling process water for clean operations."
              badgeText="ESG Standard"
              icon={<Droplets className="w-5 h-5 text-[#D4AF37]" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 5. NEW Container Shipping & Export Trust Section */}
      <ContainerTrustSection />

      {/* 6. Our Capability Section */}
      <CapabilitiesSection />

      {/* 7. Global Reach Map Section */}
      <GlobalReachMap />

      {/* 8. Partner Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 9. News & Updates Section */}
      <section className="py-28 bg-[#060D17] border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            eyebrow="Corporate Insights & News"
            title="Latest Updates from Superfine Exports"
            subtitle="Stay informed on our eco-dyeing innovations, trade show presence, and international textile standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {NEWS_DATA.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl bg-[#0F2342] border border-slate-800 hover:border-[#C9A227]/40 overflow-hidden transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#060D17]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#060D17]/90 text-[#D4AF37] text-[11px] font-mono border border-[#C9A227]/30 backdrop-blur">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#F5F3EE] group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-[#D4AF37] group-hover:underline">
                    <span>Read Press Release</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Specs Modal Handler */}
      <FabricDetailModal
        fabric={selectedFabric}
        onClose={() => setSelectedFabric(null)}
      />
    </div>
  );
}
