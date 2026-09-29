"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, Ship, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

export const GlobalReachMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>("europe");

  const exportRegions = [
    {
      id: "europe",
      name: "European Union & UK",
      share: "38% Export Volume",
      countries: ["Germany", "France", "Italy", "United Kingdom", "Spain", "Poland", "Netherlands"],
      popularFabrics: "GOTS Organic Twills, Eco-Viscose Poplin, European Flax Linen",
      leadTime: "18-22 Days Sea Freight to Hamburg/Rotterdam"
    },
    {
      id: "americas",
      name: "North & South America",
      share: "32% Export Volume",
      countries: ["United States", "Canada", "Mexico", "Colombia", "Brazil"],
      popularFabrics: "Heavy Poly-Cotton Uniform Canvas, Combed Cotton Satin, Chino Twills",
      leadTime: "24-28 Days Sea Freight to NYC/LA/Vancouver"
    },
    {
      id: "middleeast",
      name: "Middle East & GCC",
      share: "18% Export Volume",
      countries: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait"],
      popularFabrics: "Mercerized Cotton Satin, Silky Modal Rayon, White Uniform Poplin",
      leadTime: "7-10 Days Direct Sea Freight to Jebel Ali"
    },
    {
      id: "asiapacific",
      name: "Asia-Pacific & Oceania",
      share: "12% Export Volume",
      countries: ["Australia", "Japan", "Vietnam", "Singapore", "South Korea"],
      popularFabrics: "Slub Linen Chambray, Breathable Tencel Blends, Eco Pigment Wash",
      leadTime: "12-16 Days Sea Freight to Sydney/Yokohama"
    },
  ];

  const currentRegion = exportRegions.find(r => r.id === activeRegion) || exportRegions[0];

  return (
    <section className="py-28 bg-[#0B1A33] border-t border-slate-800/80 relative overflow-hidden text-[#F5F3EE]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="dark"
          eyebrow="Global Footprint"
          title="Exporting to 45+ Countries Worldwide"
          subtitle="Superfine Exports maintains dedicated logistics lanes with FCL (Full Container Load) and LCL shipping protocols to all major global ports."
        />

        {/* Region selector tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {exportRegions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeRegion === region.id
                  ? "bg-[#C9A227] text-[#060D17] shadow-xl shadow-[#C9A227]/20 scale-105"
                  : "bg-[#0F2342] text-slate-300 hover:bg-slate-800 border border-slate-700/60"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Map Visual & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Graphic Container */}
          <div className="lg:col-span-7 rounded-3xl bg-[#060D17] p-6 md:p-8 border border-[#C9A227]/30 shadow-2xl relative overflow-hidden">
            <div className="relative aspect-[16/9] w-full flex items-center justify-center bg-[#091426] rounded-2xl border border-slate-800 p-6">
              {/* Animated Map SVG with Glowing Dots & Shipping Lanes */}
              <svg className="w-full h-full text-slate-800" viewBox="0 0 800 400" fill="none">
                <path d="M0 100 H800 M0 200 H800 M0 300 H800" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M200 0 V400 M400 0 V400 M600 0 V400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                
                {/* North America Hub */}
                <circle cx="200" cy="140" r="10" className="fill-[#C9A227]/20 stroke-[#C9A227] stroke-2 animate-ping" />
                <circle cx="200" cy="140" r="4" className="fill-[#D4AF37]" />
                
                {/* Europe Hub */}
                <circle cx="420" cy="120" r="10" className="fill-[#C9A227]/20 stroke-[#C9A227] stroke-2 animate-ping" />
                <circle cx="420" cy="120" r="4" className="fill-[#D4AF37]" />

                {/* Middle East Hub */}
                <circle cx="480" cy="180" r="10" className="fill-[#C9A227]/20 stroke-[#C9A227] stroke-2 animate-ping" />
                <circle cx="480" cy="180" r="4" className="fill-[#D4AF37]" />

                {/* India HQ Mill */}
                <circle cx="540" cy="200" r="14" className="fill-orange-500/30 stroke-orange-400 stroke-2 animate-pulse" />
                <circle cx="540" cy="200" r="6" className="fill-orange-400" />

                {/* East Asia Hub */}
                <circle cx="660" cy="180" r="10" className="fill-[#C9A227]/20 stroke-[#C9A227] stroke-2 animate-ping" />
                <circle cx="660" cy="180" r="4" className="fill-[#D4AF37]" />

                {/* Animated Gold Shipping Curves */}
                <motion.path
                  d="M540 200 Q 480 150 420 120"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeDasharray="8 4"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.path
                  d="M540 200 Q 370 120 200 140"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeDasharray="8 4"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />
                <motion.path
                  d="M540 200 Q 600 180 660 180"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  strokeDasharray="8 4"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </svg>

              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-[#060D17]/90 border border-[#C9A227]/30 text-xs font-mono text-[#D4AF37] font-bold">
                HQ Mill: Ahmedabad, India 🇮🇳
              </div>
              <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-lg bg-[#060D17]/90 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-[#D4AF37]" />
                <span>Mundra & Nhava Sheva Sea Ports</span>
              </div>
            </div>
          </div>

          {/* Region Details Box */}
          <div className="lg:col-span-5">
            <motion.div
              key={currentRegion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#0F2342] p-8 border border-[#C9A227]/30 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#D4AF37] border border-[#C9A227]/30 font-bold">
                  {currentRegion.share}
                </span>
                <Globe2 className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#F5F3EE]">
                  {currentRegion.name}
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Key shipping destinations and custom buyer specifications:
                </p>
              </div>

              {/* Destination Countries Badges */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Primary Destination Ports
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.countries.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-lg bg-[#060D17] border border-slate-700 text-xs font-semibold text-[#F5F3EE]"
                    >
                      📍 {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-200">Demanded Export Qualities:</div>
                <div className="text-xs text-[#D4AF37] font-mono bg-[#060D17] p-3 rounded-xl border border-[#C9A227]/20">
                  {currentRegion.popularFabrics}
                </div>
              </div>

              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Ship className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{currentRegion.leadTime}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-xl font-bold text-xs text-[#060D17] bg-[#C9A227] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Inquire Shipping Rates for {currentRegion.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
