"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Download, CheckCircle2, FileText, Calendar, Building } from "lucide-react";
import { Certification } from "@/data/certifications";

interface CertificateCardProps {
  certification: Certification;
  index?: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certification,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-6 md:p-8 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between"
    >
      <div className="space-y-6">
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border ${certification.badgeBg} ${certification.badgeTextColor}`}>
            {certification.shortCode}
          </span>
          <ShieldCheck className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-serif font-bold text-xl md:text-2xl text-slate-100 group-hover:text-amber-300 transition-colors">
            {certification.name}
          </h3>
          <p className="mt-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            {certification.description}
          </p>
        </div>

        {/* Highlights List */}
        <div className="space-y-2 pt-4 border-t border-slate-800">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Audit Conformance Highlights
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            {certification.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Issuer & Validity Details */}
        <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">Auditing Agency</span>
            <span className="text-slate-200 truncate block font-semibold">{certification.issuedBy}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">Audit Validity</span>
            <span className="text-amber-400 font-semibold">{certification.validUntil}</span>
          </div>
        </div>
      </div>

      {/* Download Action */}
      <div className="pt-6 mt-6 border-t border-slate-800/60">
        <a
          href={certification.downloadUrl}
          onClick={(e) => {
            e.preventDefault();
            alert(`Downloading Verified Certificate PDF for ${certification.name} (Placeholder PDF trigger)`);
          }}
          className="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
        >
          <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
          <span>Download Verified Audit Certificate (PDF)</span>
        </a>
      </div>
    </motion.div>
  );
};
