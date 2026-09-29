"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Layers,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { FABRIC_CATEGORIES, FABRICS_DATA } from "@/data/fabrics";
import { MagneticButton } from "./MagneticButton";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Fabrics", href: "/fabrics", hasMegaMenu: true },
    { name: "About Us", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact & RFQ", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1A33]/95 backdrop-blur-2xl border-b border-[#C9A227]/20 shadow-2xl py-3"
          : "bg-gradient-to-b from-[#060D17]/90 via-[#0B1A33]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#C9A227] to-[#060D17] p-[1px] shadow-lg shadow-[#C9A227]/10 group-hover:shadow-[#C9A227]/30 transition-all">
              <div className="w-full h-full bg-[#060D17] rounded-[11px] flex items-center justify-center">
                <span className="font-serif font-black text-xl text-gold-gradient">
                  SF
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[#F5F3EE] tracking-tight group-hover:text-[#D4AF37] transition-colors">
                SUPERFINE EXPORTS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-sans font-semibold">
                Dyed Fabrics • Global B2B Export
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive || isMegaMenuOpen
                          ? "text-[#D4AF37] bg-[#0F2342] border border-[#C9A227]/30"
                          : "text-slate-300 hover:text-white hover:bg-[#0F2342]/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMegaMenuOpen ? "rotate-180 text-[#D4AF37]" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isMegaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[780px] p-6 glass-dropdown-gold rounded-3xl shadow-2xl z-50"
                        >
                          <div className="grid grid-cols-12 gap-6">
                            {/* Categories sidebar */}
                            <div className="col-span-5 border-r border-slate-800 pr-6 space-y-2">
                              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                                <Layers className="w-4 h-4 text-[#D4AF37]" />
                                Fabric Categories
                              </div>
                              {FABRIC_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/fabrics?category=${cat.id}`}
                                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#C9A227]/10 hover:border-[#C9A227]/30 border border-transparent transition-all"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-slate-200 group-hover:text-[#D4AF37]">
                                      {cat.label}
                                    </div>
                                    <div className="text-[11px] text-slate-400">
                                      {cat.id === 'Cotton' && 'Combed Twill, Satin, Poplin'}
                                      {cat.id === 'Rayon' && 'Viscose, Bamboo, Modal'}
                                      {cat.id === 'Poly-Cotton' && 'Scrub Canvas, Uniform Poplin'}
                                      {cat.id === 'Linen' && 'European Flax, Slub Weave'}
                                      {cat.id === 'Blended' && 'Linen-Cotton, Tencel Blend'}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                                </Link>
                              ))}
                            </div>

                            {/* Featured Qualities */}
                            <div className="col-span-7 space-y-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                                  Export Qualities
                                </span>
                                <Link
                                  href="/fabrics"
                                  className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
                                >
                                  Full Catalogue &rarr;
                                </Link>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                {FABRICS_DATA.slice(0, 4).map((fabric) => (
                                  <Link
                                    key={fabric.id}
                                    href={`/fabrics?id=${fabric.id}`}
                                    className="group relative rounded-xl overflow-hidden bg-[#0F2342] border border-slate-800 hover:border-[#C9A227]/40 p-2.5 flex items-start gap-3 transition-all"
                                  >
                                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-900 relative">
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        src={fabric.image}
                                        alt={fabric.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      />
                                    </div>
                                    <div className="overflow-hidden">
                                      <h4 className="text-xs font-semibold text-slate-200 truncate group-hover:text-[#D4AF37]">
                                        {fabric.name}
                                      </h4>
                                      <p className="text-[10px] text-[#D4AF37] font-mono mt-0.5">
                                        {fabric.gsm} GSM • {fabric.type}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#D4AF37] bg-[#0F2342] border border-[#C9A227]/30"
                      : "text-slate-300 hover:text-white hover:bg-[#0F2342]/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Magnetic CTA Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#060D17] border-2 border-[#C9A227] hover:bg-[#C9A227] hover:text-[#060D17] shadow-lg shadow-[#C9A227]/10 transition-all duration-300"
              >
                <span>Request RFQ Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#060D17] bg-[#C9A227] hover:bg-[#D4AF37] transition-colors"
            >
              RFQ
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#0F2342] border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#060D17]/95 backdrop-blur-2xl border-b border-[#C9A227]/20 px-4 pt-4 pb-6 space-y-4"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#D4AF37] bg-[#C9A227]/10 border border-[#C9A227]/30"
                      : "text-slate-300 hover:bg-[#0F2342]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-[#060D17] bg-[#C9A227] text-center"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
