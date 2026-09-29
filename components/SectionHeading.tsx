"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light"; // "dark" = section has navy bg, "light" = section has off-white linen bg
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleColor = theme === "dark" ? "text-[#F5F3EE]" : "text-[#0B1A33]";
  const subtitleColor = theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className={`flex flex-col max-w-3xl mb-12 ${alignClasses[align]}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#C9A227]/10 text-[#D4AF37] border border-[#C9A227]/30 mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed font-sans ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
