"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Building2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      id: "t1",
      quote: "Superfine Exports has been our primary supplier of Mercerized Cotton Twill for 6 consecutive seasons. Their batch-to-batch color consistency and Spectrophotometer shade matching across 50,000-meter shipments is outstanding.",
      author: "Marcus Vance",
      role: "VP of Global Sourcing",
      company: "Nordic Garments Group",
      country: "Germany 🇩🇪",
      rating: 5,
      fabricOrdered: "Royal Imperial Combed Cotton Twill"
    },
    {
      id: "t2",
      quote: "Finding OEKO-TEX Class 1 organic cotton fabrics with zero shade variation was a challenge until we partnered with Superfine. Their lead times from Ahmedabad to Rotterdam port have been impeccable.",
      author: "Elena Rostova",
      role: "Head of Textile Procurement",
      company: "Aura Fashion House",
      country: "Netherlands 🇳🇱",
      rating: 5,
      fabricOrdered: "Eco-Viscose Silky Rayon Poplin"
    },
    {
      id: "t3",
      quote: "We source heavy-duty poly-cotton uniform fabrics for institutional tenders across North America. Superfine's chlorine resistance and high tensile strength canvas passed all lab audits on the first attempt.",
      author: "David K. Sterling",
      role: "Director of Material Operations",
      company: "Apex Workwear Corp",
      country: "United States 🇺🇸",
      rating: 5,
      fabricOrdered: "Heavy-Duty Poly-Cotton Uniform Canvas"
    },
    {
      id: "t4",
      quote: "The slub texture on their European Flax Linen collection is unmatched in hand feel. Their zero liquid discharge eco-dyehouse gives our brand the authentic ESG story our buyers demand.",
      author: "Sophie Laurent",
      role: "Sustainability & Textile Manager",
      company: "Lumière Atelier",
      country: "France 🇫🇷",
      rating: 5,
      fabricOrdered: "Pure European Flax Linen Slub"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Global Partner Trust"
          title="What International Sourcing Leaders Say"
          subtitle="Trusted by leading apparel conglomerates, workwear manufacturers, and sustainable fashion labels across Europe, the Americas, and Asia."
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-amber-500/20 absolute top-8 left-8 -z-0" />

              <div className="relative z-10 space-y-6">
                {/* Rating stars & fabric order badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-mono font-medium border border-slate-700">
                    Sourced: {current.fabricOrdered}
                  </span>
                </div>

                {/* Main Quote Text */}
                <blockquote className="text-lg md:text-2xl font-serif text-slate-100 leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-bold font-serif text-lg">
                      {current.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-100 flex items-center gap-2">
                        <span>{current.author}</span>
                        <span className="text-xs text-slate-400 font-normal">({current.country})</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        {current.role} • <span className="text-amber-400 font-semibold">{current.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified B2B Buyer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-amber-400" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
