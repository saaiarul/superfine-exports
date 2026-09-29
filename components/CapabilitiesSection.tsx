"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Droplets, 
  Cpu, 
  Layers, 
  Container, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: "01. High-Speed Continuous Vat Dyeing",
      description: "Automated continuous vat and reactive dyeing lines achieving uniform shade application across 100,000+ meter production runs with zero shade banding.",
      stat: "100,000 Mtrs / Day Pass",
      icon: <Droplets className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "02. AI Spectrophotometer Color-Matching Lab",
      description: "X-Rite spectrophotometers and Datanet color kitchen algorithms guarantee Delta-E < 0.5 color accuracy against buyer pantone standards.",
      stat: "Delta-E < 0.5 Precision",
      icon: <Cpu className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "03. Strict Batch-to-Batch Consistency Control",
      description: "Automated tension control, computer-monitored liquor ratios, and automated swatching ensure identical shade continuity from roll 1 to roll 500.",
      stat: "100% Roll-to-Roll Continuity",
      icon: <Layers className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      title: "04. Export Barrier Packing & Direct Container Stuffing",
      description: "Double-walled PE poly wrap, sea-worthy moisture desiccant packs, barcode roll labeling, and direct factory container stuffing for damage-free ocean freight.",
      stat: "FCL / LCL Sea Shipping",
      icon: <Container className="w-5 h-5 text-[#D4AF37]" />
    }
  ];

  return (
    <section className="py-28 bg-[#F5F3EE] text-[#0B1A33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          eyebrow="World-Class Infrastructure"
          title="Engineered for Precision Textile Export"
          subtitle="Our integrated Ahmedabad dyehouse combines automated continuous dyeing lines, computerized lab dipping, and zero-liquid-discharge water recycling."
        />

        {/* Pinned Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Pinned Sticky Visual Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-[#060D17] shadow-2xl border-2 border-[#C9A227]/30 group"
            >
              {/* Main facility photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Superfine Exports Continuous Dyehouse Unit"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/30 to-transparent" />

              {/* Stat Overlay Box */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel-navy border border-[#C9A227]/40 shadow-2xl text-[#F5F3EE]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                    Continuous Processing Line #4
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-xl font-serif font-bold text-[#F5F3EE]">
                  25,000,000 Meters Annual Output
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Zero Liquid Discharge (ZLD) Certified Mill</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Capabilities List Column */}
          <div className="lg:col-span-6 space-y-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#C9A227] shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1A33] flex items-center justify-center shrink-0 group-hover:bg-[#C9A227] group-hover:text-[#060D17] transition-colors">
                    {cap.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#0B1A33] group-hover:text-[#C9A227] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                      {cap.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-[#C9A227]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{cap.stat}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B1A33] hover:bg-[#0F2342] text-[#F5F3EE] font-bold text-sm shadow-xl transition-all group"
              >
                <span>Tour Our Full Manufacturing Facility</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
