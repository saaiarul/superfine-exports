"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock 
} from "lucide-react";
import { CERTIFICATIONS_DATA } from "@/data/certifications";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060D17] border-t border-[#C9A227]/20 text-slate-400 font-sans pt-16 pb-12 relative overflow-hidden">
      {/* Gold ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust & Certification Bar */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#091426] border border-[#C9A227]/30 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-[#F5F3EE]">
                  Globally Certified Textile Export House
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  OEKO-TEX Standard 100 Class I, GOTS 6.0 Organic, ISO 9001:2015 & ZDHC Level 3
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {CERTIFICATIONS_DATA.slice(0, 4).map((cert) => (
                <div
                  key={cert.id}
                  className="px-3 py-1.5 rounded-lg bg-[#060D17] border border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{cert.shortCode}</span>
                </div>
              ))}
              <Link
                href="/certifications"
                className="px-3.5 py-1.5 rounded-lg bg-[#C9A227]/10 hover:bg-[#C9A227]/20 border border-[#C9A227]/40 text-[11px] font-bold text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>View Certificates</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C9A227] p-[1px]">
                <div className="w-full h-full bg-[#060D17] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-black text-[#D4AF37] text-lg">SF</span>
                </div>
              </div>
              <span className="font-serif font-bold text-xl text-[#F5F3EE] tracking-tight">
                SUPERFINE EXPORTS
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier manufacturer and exporter of combed cotton twills, eco-viscose poplins, poly-cotton uniform canvas, and European flax linen for global fashion brands and sourcing agencies.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Globe2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Exporting to 45+ Countries Across EU, Americas & Asia</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>RFQ Response Time: Within 24 Business Hours</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/fabrics" className="hover:text-[#D4AF37] transition-colors">
                  Fabric Catalogue
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Superfine Exports
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-[#D4AF37] transition-colors">
                  Compliance & Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Request RFQ Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Fabric Lines */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              Dyed Fabric Lines
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fabrics?category=Cotton" className="hover:text-[#D4AF37] transition-colors">
                  Combed Cotton Twills
                </Link>
              </li>
              <li>
                <Link href="/fabrics?category=Rayon" className="hover:text-[#D4AF37] transition-colors">
                  Viscose & Bamboo Rayon
                </Link>
              </li>
              <li>
                <Link href="/fabrics?category=Poly-Cotton" className="hover:text-[#D4AF37] transition-colors">
                  Uniform Poly-Cotton
                </Link>
              </li>
              <li>
                <Link href="/fabrics?category=Linen" className="hover:text-[#D4AF37] transition-colors">
                  Pure European Flax Linen
                </Link>
              </li>
              <li>
                <Link href="/fabrics?category=Blended" className="hover:text-[#D4AF37] transition-colors">
                  Tencel & Linen Blends
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              Export Desk & Mills
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Superfine Exports Textile Park, GIDC Phase III, Narol Textile Hub, Ahmedabad, Gujarat 382405, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:exports@superfineexports.com" className="hover:text-[#D4AF37]">
                  exports@superfineexports.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+917929704400" className="hover:text-[#D4AF37]">
                  +91 79 2970 4400 / +91 98250 11223
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gold Accent Divider */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Superfine Exports Ltd. All Rights Reserved. Built for global textile trade.</p>
          <div className="flex items-center space-x-6">
            <Link href="/certifications" className="hover:text-slate-400">
              ISO Compliance
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Terms of Export
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
