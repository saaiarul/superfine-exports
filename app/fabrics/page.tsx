"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  Layers, 
  RotateCcw, 
  ArrowRight
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FabricCard } from "@/components/FabricCard";
import { FabricDetailModal } from "@/components/FabricDetailModal";
import { FABRICS_DATA, FABRIC_CATEGORIES, Fabric } from "@/data/fabrics";

function FabricCatalogueContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialId = searchParams.get("id");

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGsmRange, setSelectedGsmRange] = useState<string>("all");
  const [selectedDyeingMethod, setSelectedDyeingMethod] = useState<string>("all");
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
    const fabricId = searchParams.get("id");
    if (fabricId) {
      const found = FABRICS_DATA.find((f) => f.id === fabricId);
      if (found) setSelectedFabric(found);
    }
  }, [searchParams]);

  const dyeingMethods = [
    { id: "all", label: "All Dyeing Methods" },
    { id: "Continuous Vat Dyeing", label: "Continuous Vat Dyeing" },
    { id: "Cold Pad Batch", label: "Cold Pad Batch Reactive" },
    { id: "Thermosol", label: "High-Temp Thermosol" },
    { id: "Eco Indigo", label: "Eco Indigo & Pigment" },
  ];

  const gsmRanges = [
    { id: "all", label: "All GSM Ranges" },
    { id: "light", label: "Lightweight (< 160 GSM)" },
    { id: "medium", label: "Medium Weight (160 - 230 GSM)" },
    { id: "heavy", label: "Heavyweight (> 230 GSM)" },
  ];

  const filteredFabrics = useMemo(() => {
    return FABRICS_DATA.filter((fabric) => {
      if (selectedCategory !== "all" && fabric.type !== selectedCategory) {
        return false;
      }
      if (
        searchQuery.trim() !== "" &&
        !fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !fabric.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !fabric.composition.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (selectedGsmRange === "light" && fabric.gsm >= 160) return false;
      if (selectedGsmRange === "medium" && (fabric.gsm < 160 || fabric.gsm > 230)) return false;
      if (selectedGsmRange === "heavy" && fabric.gsm <= 230) return false;

      if (selectedDyeingMethod !== "all" && !fabric.dyeingMethod.includes(selectedDyeingMethod)) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, selectedGsmRange, selectedDyeingMethod]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSelectedGsmRange("all");
    setSelectedDyeingMethod("all");
  };

  return (
    <div className="min-h-screen bg-[#0B1A33] pt-28 pb-24 text-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          theme="dark"
          eyebrow="Export Fabric Catalogue"
          title="Filterable B2B Dyed Fabrics Portfolio"
          subtitle="Explore technical specs, yarn counts, GSM weights, colorways, and minimum order quantities across all fabric lines."
        />

        {/* Filter Controls Bar */}
        <div className="mt-8 p-6 rounded-3xl bg-[#0F2342] border border-[#C9A227]/30 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by fabric name, composition, twill..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#060D17] border border-slate-800 text-xs text-[#F5F3EE] placeholder-slate-500 focus:outline-none focus:border-[#C9A227] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Stats & Reset */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono text-slate-300">
                Showing <strong className="text-[#D4AF37] font-bold">{filteredFabrics.length}</strong> of {FABRICS_DATA.length} Qualities
              </span>
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-xl bg-[#060D17] border border-slate-700 hover:border-[#C9A227] text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
              Category:
            </span>
            {FABRIC_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#C9A227] text-[#060D17] shadow-md shadow-[#C9A227]/20"
                    : "bg-[#060D17] text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                GSM Weight Filter
              </label>
              <select
                value={selectedGsmRange}
                onChange={(e) => setSelectedGsmRange(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#060D17] border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-[#C9A227]"
              >
                {gsmRanges.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                Dyeing Process Filter
              </label>
              <select
                value={selectedDyeingMethod}
                onChange={(e) => setSelectedDyeingMethod(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#060D17] border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-[#C9A227]"
              >
                {dyeingMethods.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Reflow Animating Fabrics Grid */}
        <div className="mt-12">
          {filteredFabrics.length === 0 ? (
            <div className="p-16 rounded-3xl bg-[#0F2342] border border-slate-800 text-center space-y-4">
              <Layers className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-xl font-serif font-bold text-slate-200">No matching fabric qualities found</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Try adjusting your search keywords, GSM weight, or fabric category filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-full bg-[#C9A227] text-[#060D17] font-bold text-xs shadow-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredFabrics.map((fabric, idx) => (
                  <motion.div
                    key={fabric.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FabricCard
                      fabric={fabric}
                      onSelect={(f) => setSelectedFabric(f)}
                      index={idx}
                      theme="dark"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Custom Lab Dip Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0F2342] via-[#060D17] to-[#0F2342] border border-[#C9A227]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#D4AF37] text-xs font-mono font-bold uppercase border border-[#C9A227]/30">
              Custom Lab Dips & Weave Formulations
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F5F3EE]">
              Need Custom GSM, Pantones, or Blend Formulations?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our color-matching lab can develop custom lab dips against your Pantone TCX standards within 5 business days.
            </p>
          </div>

          <a
            href="/contact?type=CustomLabDip"
            className="px-8 py-4 rounded-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#060D17] font-bold text-sm shadow-xl shrink-0 flex items-center gap-2 transition-all"
          >
            <span>Request Custom Lab Dip</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Fabric Specs Modal */}
      <FabricDetailModal
        fabric={selectedFabric}
        onClose={() => setSelectedFabric(null)}
      />
    </div>
  );
}

export default function FabricsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B1A33] pt-32 text-center text-slate-400">Loading Fabric Catalogue...</div>}>
      <FabricCatalogueContent />
    </Suspense>
  );
}
