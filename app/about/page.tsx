"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Award, 
  Droplets, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Users,
  Factory,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineSection } from "@/components/TimelineSection";

export default function AboutPage() {
  const facilityGallery = [
    {
      title: "Continuous Vat Dyeing Range #3",
      caption: "High-speed 100,000 mtr/day continuous dyeing unit delivering uniform shade application.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Spectrophotometer Shade Control Lab",
      caption: "X-Rite color kitchen measuring Delta-E < 0.5 against buyer pantones.",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Zero Liquid Discharge (ZLD) Recycling",
      caption: "Closed-loop effluent treatment plant saving 98% water.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Container Stuffing & Ocean Shipping",
      caption: "Direct factory stuffing of 20ft/40ft FCL export containers with sea-worthy barrier wrapping.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Heading */}
        <SectionHeading
          eyebrow="Our Story & Legacy"
          title="Building Global B2B Textile Excellence Since 1998"
          subtitle="Superfine Exports combines decades of Gujarat dyeing heritage with continuous automation, AI shade matching, and zero-liquid-discharge environmental stewardship."
        />

        {/* Narrative & Leadership Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                Founder&apos;s Vision & Ethos
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-100">
                &ldquo;Precision Dyeing is the Harmony of Chemical Science and Responsible Engineering.&rdquo;
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Founded in 1998 in Ahmedabad—the historic textile hub of India—Superfine Exports began with a single mission: to provide international apparel brands with dyed fabrics that meet stringent European and American colorfastness standards without compromising on environmental responsibility.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Over 28 years, we have scaled our continuous dyeing capacity to over 25 million meters annually. Today, our fabrics power workwear uniforms in the USA, organic fashion lines in Germany and France, and luxury shirtings across the GCC region.
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-slate-100">Rameshchandra Patel</div>
                  <div className="text-xs text-slate-400">Managing Director & Founder, Superfine Exports</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono border border-amber-500/20">
                  Est. 1998
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold text-amber-400">25M+</div>
              <div className="text-xs font-bold text-slate-200">Meters/Year Capacity</div>
              <div className="text-[11px] text-slate-400">Continuous Vat Dyeing</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold text-amber-400">45+</div>
              <div className="text-xs font-bold text-slate-200">Export Destinations</div>
              <div className="text-[11px] text-slate-400">EU, Americas & GCC</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold text-amber-400">98%</div>
              <div className="text-xs font-bold text-slate-200">Water Recycled (ZLD)</div>
              <div className="text-[11px] text-slate-400">Zero River Discharge</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold text-amber-400">3.5 MW</div>
              <div className="text-xs font-bold text-slate-200">Solar Power Plant</div>
              <div className="text-[11px] text-slate-400">Clean Energy Mill</div>
            </div>
          </motion.div>
        </div>

        {/* Manufacturing Facility Photo Gallery */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Integrated Mill Infrastructure"
            title="Manufacturing Facility & Lab Showcase"
            subtitle="Take a visual tour inside our continuous dyeing plant, computerized color kitchen, and automated container loading bays."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {facilityGallery.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="font-serif font-bold text-base text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Component */}
        <div className="mt-24">
          <TimelineSection />
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 text-center space-y-6">
          <h3 className="text-3xl font-serif font-bold text-slate-100">
            Ready to Partner with Superfine Exports?
          </h3>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Our export desk can dispatch swatch books and customized RFQ container rates within 24 hours.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl flex items-center gap-2 transition-all"
            >
              <span>Contact Global Export Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
