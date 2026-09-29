"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Building2, Cpu, Droplets, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MILESTONES_DATA } from "@/data/milestones";
import { SectionHeading } from "./SectionHeading";

export const TimelineSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-amber-400" />;
      case "Droplets":
        return <Droplets className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case "Award":
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Heritage & Milestones"
          title="28 Years of Dyeing Excellence"
          subtitle="From a single yarn dyeing house in 1998 to a 25M meter global export power house operating with zero liquid discharge."
        />

        <div className="mt-16 relative">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {MILESTONES_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif font-black text-3xl md:text-4xl text-amber-400">
                          {milestone.year}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                          {getIcon(milestone.iconName)}
                        </div>
                      </div>

                      <h3 className="font-serif font-bold text-xl text-slate-100 group-hover:text-amber-300 transition-colors">
                        {milestone.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        {milestone.subtitle}
                      </div>

                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>

                      {milestone.stat && (
                        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{milestone.stat}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Node Dot */}
                  <div className="my-4 md:my-0 relative flex items-center justify-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border-4 border-amber-500 shadow-lg shadow-amber-500/30 flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-100 animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
