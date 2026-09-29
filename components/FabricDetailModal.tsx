"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  FileText, 
  Download, 
  CheckCircle2, 
  Layers, 
  Ruler, 
  Scale, 
  Sparkles, 
  Send,
  ShieldCheck,
  Check
} from "lucide-react";
import { Fabric } from "@/data/fabrics";

interface FabricDetailModalProps {
  fabric: Fabric | null;
  onClose: () => void;
  onRequestSample?: (fabric: Fabric) => void;
}

export const FabricDetailModal: React.FC<FabricDetailModalProps> = ({
  fabric,
  onClose,
  onRequestSample,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sampleForm, setSampleForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    quantity: "5 meters",
    notes: "",
  });

  if (!fabric) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {fabric.type} • {fabric.gsm} GSM
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {fabric.id}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left Column: Image preview & specs breakdown */}
              <div className="md:col-span-6 space-y-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                    <span className="bg-slate-900/90 px-3 py-1 rounded-lg backdrop-blur border border-slate-800 font-mono">
                      Width: {fabric.width}
                    </span>
                    <span className="bg-slate-900/90 px-3 py-1 rounded-lg backdrop-blur border border-slate-800 font-mono">
                      MOQ: {fabric.moq}
                    </span>
                  </div>
                </div>

                {/* Color Swatch Palettes */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    Available Export Colorways
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {fabric.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                      >
                        • {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download Spec Sheet Link */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">Technical Datasheet (PDF)</div>
                      <div className="text-[10px] text-slate-400">Includes ISO lab tests, shrinkage & fastness</div>
                    </div>
                  </div>
                  <a
                    href={`/api/enquiry?downloadSpec=${fabric.id}`}
                    download
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading Spec Sheet PDF for ${fabric.name} (Placeholder PDF trigger)`);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF Spec</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Full Specifications Table & RFQ Quick Form */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-100">
                    {fabric.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {fabric.shortDescription}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 font-medium">Composition</span>
                    <span className="text-slate-100 font-semibold">{fabric.composition}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 font-medium">Dyeing Process</span>
                    <span className="text-amber-400 font-semibold">{fabric.dyeingMethod}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 font-medium">Weave Type</span>
                    <span className="text-slate-100 font-semibold">{fabric.specs.weave}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 font-medium">Yarn Count</span>
                    <span className="text-slate-100 font-semibold">{fabric.specs.yarnCount}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 font-medium">Color Fastness</span>
                    <span className="text-emerald-400 font-semibold">{fabric.specs.colorFastness}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400 font-medium">Shrinkage Standard</span>
                    <span className="text-slate-100 font-semibold">{fabric.specs.shrinkage}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400 font-medium">Production Lead Time</span>
                    <span className="text-slate-100 font-semibold">{fabric.specs.leadTime}</span>
                  </div>
                </div>

                {/* Finishes & Certifications badges */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Finishes & Certifications
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {fabric.specs.finishes.map((f) => (
                      <span key={f} className="px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-[11px] text-indigo-300 font-medium">
                        ✓ {f}
                      </span>
                    ))}
                    {fabric.specs.certification.map((c) => (
                      <span key={c} className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-[11px] text-emerald-300 font-medium">
                        ★ {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Sample Swatch Request Form */}
                <div className="pt-4 border-t border-slate-800">
                  {formSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-2">
                      <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                      <h4 className="text-sm font-bold text-emerald-200">Sample Swatch Request Received!</h4>
                      <p className="text-xs text-emerald-300">
                        Our export desk will courier the swatch book for <span className="font-semibold">{fabric.name}</span> to your address within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5" />
                        Request Swatch Courier Sample
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={sampleForm.name}
                          onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Company Name *"
                          value={sampleForm.company}
                          onChange={(e) => setSampleForm({ ...sampleForm, company: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="email"
                          required
                          placeholder="Corporate Email *"
                          value={sampleForm.email}
                          onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Destination Country *"
                          value={sampleForm.country}
                          onChange={(e) => setSampleForm({ ...sampleForm, country: e.target.value })}
                          className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Dispatching Request..." : `Dispatch Swatch Sample for ${fabric.name}`}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
