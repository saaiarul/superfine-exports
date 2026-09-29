"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountUpNumber } from "./CountUpNumber";
import { TiltCard } from "./TiltCard";

interface StatCardProps {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
  badgeText?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  numericValue,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  description,
  badgeText,
  icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <TiltCard className="h-full">
        <div className="group relative rounded-3xl bg-gradient-to-b from-[#0F2342] to-[#0A1325] p-6 md:p-8 border border-[#C9A227]/20 hover:border-[#C9A227]/60 transition-all duration-300 shadow-2xl hover:shadow-[#C9A227]/10 flex flex-col justify-between h-full">
          {/* Top accent glow line */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227]/0 group-hover:via-[#C9A227]/80 to-transparent transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between mb-4">
              {badgeText && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#D4AF37] border border-[#C9A227]/30">
                  {badgeText}
                </span>
              )}
              {icon && (
                <div className="w-10 h-10 rounded-xl bg-[#060D17] border border-slate-700/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#C9A227] group-hover:text-[#060D17] transition-colors">
                  {icon}
                </div>
              )}
            </div>

            {/* Animated Count Up Stat Number */}
            <div className="font-serif font-bold text-4xl md:text-5xl text-gold-gradient tracking-tight">
              <CountUpNumber
                end={numericValue}
                prefix={prefix}
                suffix={suffix}
                decimals={decimals}
              />
            </div>

            {/* Metric Label */}
            <h3 className="mt-3 font-sans font-bold text-base md:text-lg text-[#F5F3EE] tracking-tight">
              {label}
            </h3>

            {/* Description */}
            <p className="mt-2 text-xs md:text-sm text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};
