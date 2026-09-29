"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Container, 
  Ship, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  FileCheck2, 
  Lock, 
  Clock, 
  Anchor, 
  ArrowRight,
  TrendingUp,
  PackageCheck
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { CountUpNumber } from "./CountUpNumber";
import { TiltCard } from "./TiltCard";

export const ContainerTrustSection: React.FC = () => {
  const containerMetrics = [
    {
      value: 4850,
      suffix: "+",
      label: "FCL Export Containers Shipped",
      description: "20ft & 40ft High-Cube ocean containers dispatched directly from our Ahmedabad mill to global ports with zero damage claims.",
      badge: "Ocean Freight Record",
      icon: <Container className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      value: 180,
      suffix: "M+ Mtrs",
      label: "Dyed Fabric Exported",
      description: "Over 180 million meters of combed cotton twills, organic poplins, and uniform canvas delivered to apparel brands across EU, USA & GCC.",
      badge: "Volume Delivered",
      icon: <Ship className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      value: 100,
      suffix: "%",
      label: "Customs Duty Clearance Rate",
      description: "100% first-attempt customs pass rate with Form A, EUR.1, and Certificate of Origin (COO) documentation included with every Bill of Lading.",
      badge: "Compliance",
      icon: <FileCheck2 className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      value: 72,
      suffix: " Hours",
      label: "Factory Container Stuffing SLA",
      description: "Guaranteed 72-hour turnaround from finished fabric inspection to factory container loading and seal lock verification.",
      badge: "Logistics SLA",
      icon: <Clock className="w-6 h-6 text-[#D4AF37]" />
    }
  ];

  const packingGuarantees = [
    {
      title: "Double-Layer PE Moisture Barrier",
      detail: "Every fabric roll is vacuum-wrapped in heavy-gauge 100 micron polyethylene sleeve with desiccant packs to prevent sea moisture condensation."
    },
    {
      title: "Tamper-Evident High-Security Seals",
      detail: "Containers are locked with ISO 17712 compliant bolt seals immediately upon stuffing under 24/7 CCTV surveillance."
    },
    {
      title: "Barcode Roll-Level Traceability",
      detail: "Every roll features a scannable QR code detailing piece length, shade lot #, dye date, and lab test inspection sign-off."
    },
    {
      title: "100% Insured Sea Transit Protection",
      detail: "All export shipments carry comprehensive Institute Cargo Clauses (A) marine insurance from factory to destination port."
    }
  ];

  return (
    <section className="py-28 bg-[#091426] border-y border-[#C9A227]/20 relative overflow-hidden text-[#F5F3EE]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0F2342]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="dark"
          eyebrow="Export Container Logistics & Trust"
          title="Proven Global Container Dispatch Metrics"
          subtitle="Real-time performance figures backing our international shipping reliability, sea-worthy cargo packaging, and zero-rejection customs compliance."
        />

        {/* 4-Card Container Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {containerMetrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="p-6 md:p-8 rounded-3xl bg-[#0F2342] border border-[#C9A227]/30 hover:border-[#C9A227]/70 transition-all duration-300 shadow-2xl hover:shadow-[#C9A227]/10 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#D4AF37] border border-[#C9A227]/30 font-bold">
                        {item.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#060D17] border border-slate-700 flex items-center justify-center group-hover:bg-[#C9A227] group-hover:text-[#060D17] transition-colors">
                        {item.icon}
                      </div>
                    </div>

                    <div className="font-serif font-bold text-4xl md:text-5xl text-gold-gradient tracking-tight">
                      <CountUpNumber end={item.value} suffix={item.suffix} />
                    </div>

                    <h3 className="mt-3 font-serif font-bold text-lg text-[#F5F3EE] group-hover:text-[#D4AF37] transition-colors">
                      {item.label}
                    </h3>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Sea-Worthy Packaging & Cargo Security Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#060D17] border border-[#C9A227]/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center shrink-0">
                <PackageCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#F5F3EE]">
                  Export Packaging & Ocean Cargo Protection Standard
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Engineered to prevent moisture degradation, roll deformation, and transit damage during 30+ day ocean voyages.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Guaranteed Zero Damage Arrival</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingGuarantees.map((g, idx) => (
              <div key={g.title} className="space-y-2 p-4 rounded-2xl bg-[#0F2342]/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{g.title}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  {g.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Anchor className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct stuffing at Ahmedabad facility with Port Transit to Mundra & Nhava Sheva (JNPT)</span>
            </div>

            <Link
              href="/contact?type=ContainerQuote"
              className="px-6 py-2.5 rounded-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#060D17] font-bold text-xs shadow-lg flex items-center gap-2 transition-all"
            >
              <span>Get FCL / LCL Container Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
