"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { Fabric } from "@/data/fabrics";
import { TiltCard } from "./TiltCard";

interface FabricCardProps {
  fabric: Fabric;
  onSelect: (fabric: Fabric) => void;
  index?: number;
  theme?: "dark" | "light";
}

export const FabricCard: React.FC<FabricCardProps> = ({
  fabric,
  onSelect,
  index = 0,
  theme = "dark",
}) => {
  const cardBg = theme === "dark" 
    ? "bg-[#0F2342]/90 border-slate-800 text-[#F5F3EE] hover:border-[#C9A227]/60" 
    : "bg-white border-slate-200 text-[#0B1A33] shadow-lg hover:border-[#C9A227]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <TiltCard className="h-full">
        <div className={`group relative rounded-3xl border overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#C9A227]/10 flex flex-col h-full ${cardBg}`}>
          {/* Top Image Box */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#060D17]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fabric.image}
              alt={fabric.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-transparent to-transparent opacity-70" />

            {/* GSM & Type Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase bg-[#060D17]/90 text-[#D4AF37] border border-[#C9A227]/30 backdrop-blur">
                {fabric.type}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#060D17]/90 text-slate-200 border border-slate-800 backdrop-blur">
                {fabric.gsm} GSM
              </span>
            </div>

            {/* Hover Quick View Trigger */}
            <div className="absolute inset-0 bg-[#060D17]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => onSelect(fabric)}
                className="px-4 py-2 rounded-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#060D17] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all flex items-center gap-1.5"
              >
                <Eye className="w-4 h-4" />
                <span>Quick View Specs</span>
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
            <div>
              <h3
                onClick={() => onSelect(fabric)}
                className="font-serif font-bold text-lg group-hover:text-[#D4AF37] transition-colors cursor-pointer line-clamp-1"
              >
                {fabric.name}
              </h3>
              <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {fabric.shortDescription}
              </p>

              {/* Specs Badges */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase">Composition</span>
                  <span className="truncate font-semibold text-slate-300">{fabric.composition}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase">Dyeing Process</span>
                  <span className="truncate font-semibold text-[#D4AF37]">{fabric.dyeingMethod}</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
              <div className="text-[11px] text-slate-400 font-mono">
                MOQ: <span className="font-semibold text-slate-200">{fabric.moq}</span>
              </div>

              <button
                onClick={() => onSelect(fabric)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline transition-all group/btn"
              >
                <span>Request Sample</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};
