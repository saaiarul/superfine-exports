"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  FileText, 
  Droplets, 
  Award, 
  FlaskConical,
  Scale,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { CertificateCard } from "@/components/CertificateCard";
import { CERTIFICATIONS_DATA } from "@/data/certifications";

export default function CertificationsPage() {
  const labAudits = [
    {
      title: "Color Fastness to Washing (ISO 105-C06)",
      grade: "Grade 4-5",
      description: "Tested for severe wash cycles, domestic laundering, and commercial dry cleaning without color bleeding."
    },
    {
      title: "Color Fastness to Light (ISO 105-B02)",
      grade: "Grade 4-5",
      description: "Xenon arc lamp exposure ensuring high resistance to UV radiation fading for outdoor garments."
    },
    {
      title: "Tensile Strength & Tear Resistance",
      grade: "ASTM D5034 Compliant",
      description: "Electronic grab test verification ensuring high durability for institutional workwear and uniform canvas."
    },
    {
      title: "Dimensional Stability & Shrinkage",
      grade: "< 2.0% Residual",
      description: "Sanforized pre-shrunk finishing ensuring garment dimensions remain stable after multiple industrial washings."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Compliance & Standards"
          title="International Certifications & ESG Accreditation"
          subtitle="Superfine Exports undergoes annual independent audits by TESTEX Zurich, Control Union, TÜV SÜD, and ZDHC to maintain gold-standard textile export certifications."
        />

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <CertificateCard key={cert.id} certification={cert} index={idx} />
          ))}
        </div>

        {/* In-House Testing Protocols Section */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Internal Quality Control"
            title="In-House ISO Laboratory Testing Protocols"
            subtitle="Every single fabric batch shipped from Superfine Exports is accompanied by an ISO-accredited Laboratory Test Report."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {labAudits.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <FlaskConical className="w-6 h-6 text-amber-400" />
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400">
                    {item.grade}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-slate-100">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audit Verification Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase border border-emerald-500/20">
              Verified Audit Reports
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-100">
              Require Verified Test Reports for Your Customs Clearance?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We provide complete chemical testing documentation, GOTS transaction certificates (TC), and OEKO-TEX passports with every ocean container dispatch.
            </p>
          </div>

          <Link
            href="/contact?subject=ComplianceVerification"
            className="px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl shrink-0 flex items-center gap-2 transition-all"
          >
            <span>Request Verified Audit Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
