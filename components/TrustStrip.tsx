"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Calendar, Award, CheckCircle2 } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const trustMetrics = [
    {
      icon: <Calendar className="w-5 h-5 text-amber-400" />,
      title: "Established 1998",
      subtitle: "28+ Years Textile Heritage",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-amber-400" />,
      title: "Exporting to 45+ Countries",
      subtitle: "EU, USA, UK, UAE & LatAm",
    },
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: "25 Million Mtrs / Year",
      subtitle: "Continuous Dyeing Capacity",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "OEKO-TEX & GOTS 6.0",
      subtitle: "Class 1 Non-Toxic Certified",
    },
  ];

  const badges = [
    { name: "OEKO-TEX 100", label: "Class I Safe" },
    { name: "GOTS ORGANIC", label: "Version 6.0" },
    { name: "ISO 9001:2015", label: "Quality System" },
    { name: "REACH EU", label: "SVHC Free" },
    { name: "ZDHC LEVEL 3", label: "Clean Water" },
  ];

  return (
    <div className="w-full bg-slate-950/90 border-y border-slate-800/80 relative z-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top trust metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-slate-800/60">
          {trustMetrics.map((metric, idx) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-amber-500/40 transition-colors">
                {metric.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-100 font-sans tracking-tight">
                  {metric.title}
                </div>
                <div className="text-[11px] text-slate-400 font-sans">
                  {metric.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom certification logos/badges ticker */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-sans shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Verified Export Compliances:
          </span>

          <div className="flex flex-wrap items-center gap-3">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 text-[11px] font-sans flex items-center gap-2 transition-all group"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-200">{badge.name}</span>
                <span className="text-slate-400 border-l border-slate-800 pl-2">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
