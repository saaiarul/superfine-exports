"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe2, 
  MessageSquare,
  FileCheck,
  ShieldCheck,
  AlertCircle,
  Building2
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FABRIC_CATEGORIES } from "@/data/fabrics";

function ContactFormContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    fabricType: searchParams.get("type") || "Cotton",
    gsm: "240 GSM",
    quantity: "5000",
    destinationCountry: "Germany",
    sampleRequested: true,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseState, setResponseState] = useState<{
    success: boolean;
    enquiryId?: string;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseState(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (res.ok && data.success) {
        setResponseState({
          success: true,
          enquiryId: data.enquiryId,
          message: data.message,
        });
      } else {
        setResponseState({
          success: false,
          message: data.message || "Failed to submit enquiry. Please check your details.",
        });
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setResponseState({
        success: false,
        message: "An unexpected error occurred. Please try again or email exports@superfineexports.com directly.",
      });
    }
  };

  const whatsappUrl = `https://wa.me/919825011223?text=${encodeURIComponent(
    `Hello Superfine Exports Desk, I am inquiring regarding B2B dyed fabric export rates for ${formData.fabricType}. My company: ${formData.company || 'N/A'}.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Request a Quotation (RFQ)"
          title="Direct Contact & Global Export Desk"
          subtitle="Submit your fabric specifications, GSM parameters, order volume, and shipping destination. Our export desk responds within 24 business hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left Column: Direct Contact Info, WhatsApp CTA & Map Embed */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Card */}
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-100">Superfine Exports Ltd.</h3>
                  <p className="text-xs text-slate-400">Head Office & Dyeing Complex</p>
                </div>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-100 block">Mills Address:</strong>
                    <span>Superfine Exports Textile Park, GIDC Phase III, Narol Industrial Hub, Ahmedabad, Gujarat 382405, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-slate-100 block">Export Desk Email:</strong>
                    <a href="mailto:exports@superfineexports.com" className="text-amber-300 hover:underline">
                      exports@superfineexports.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-slate-100 block">Export Helpline & Tel:</strong>
                    <a href="tel:+917929704400" className="text-amber-300 hover:underline">
                      +91 79 2970 4400 / +91 98250 11223
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-slate-100 block">Working Hours:</strong>
                    <span>Mon - Sat: 09:00 AM - 07:00 PM IST (GMT +5:30)</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Business Click-to-Chat Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Chat on WhatsApp Business Desk (+91 98250 11223)</span>
                </a>
              </div>
            </div>

            {/* Map Embed Placeholder Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-amber-400" />
                  Ahmedabad Dyeing Mill Location
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800/50 px-2 py-0.5 rounded">
                  Active Plant
                </span>
              </div>

              {/* Interactive map visual iframe simulation */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Superfine Exports Mill Location Map"
                  className="w-full h-full object-cover filter opacity-60"
                />
                <div className="absolute inset-0 bg-slate-950/40" />
                <div className="absolute p-3 rounded-xl bg-slate-900/90 border border-amber-500/40 text-center shadow-xl">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto animate-bounce" />
                  <div className="text-xs font-bold text-slate-100 mt-1">Superfine Exports Textile Park</div>
                  <div className="text-[10px] text-slate-400">Narol GIDC, Ahmedabad, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete B2B RFQ Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              <h3 className="text-2xl font-serif font-bold text-slate-100 mb-2">
                Submit RFQ Specification Form
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Fill out the required parameters below to receive an official proforma quote and sample courier dispatch.
              </p>

              {responseState?.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-2xl font-serif font-bold text-emerald-100">
                    RFQ Submitted Successfully!
                  </h4>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
                    Reference Enquiry ID: {responseState.enquiryId}
                  </div>
                  <p className="text-sm text-emerald-200 leading-relaxed max-w-md mx-auto">
                    {responseState.message}
                  </p>
                  <div className="pt-4 border-t border-emerald-800/60 text-xs text-emerald-300">
                    A confirmation copy has been sent to <span className="font-bold">{formData.email}</span>.
                  </div>
                  <button
                    onClick={() => setResponseState(null)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs"
                  >
                    Submit Another RFQ
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {responseState && !responseState.success && (
                    <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{responseState.message}</span>
                    </div>
                  )}

                  {/* Personal & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jean-Luc Moreau"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Apparel Sourcing Corp"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sourcing@apexapparel.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +33 1 42 68 55 00"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Fabric Specs Row: Type & GSM */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Fabric Type *
                      </label>
                      <select
                        value={formData.fabricType}
                        onChange={(e) => setFormData({ ...formData, fabricType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-amber-500"
                      >
                        {FABRIC_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Target GSM / Weight
                      </label>
                      <input
                        type="text"
                        value={formData.gsm}
                        onChange={(e) => setFormData({ ...formData, gsm: e.target.value })}
                        placeholder="e.g. 240 GSM"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Quantity & Country Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Estimated Order Quantity (Meters) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 5,000 meters"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Destination Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.destinationCountry}
                        onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                        placeholder="e.g. Germany / USA / UAE"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Sample Checkbox */}
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <input
                      type="checkbox"
                      id="sampleRequested"
                      checked={formData.sampleRequested}
                      onChange={(e) => setFormData({ ...formData, sampleRequested: e.target.checked })}
                      className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 bg-slate-900 border-slate-700"
                    />
                    <label htmlFor="sampleRequested" className="text-xs text-slate-300 font-medium cursor-pointer">
                      Please dispatch physical swatch book sample courier to our address
                    </label>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Additional Specifications & Pantone Standards
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify yarn counts, weave type, finish requirements (Sanforized, Mercerized), target target delivery dates..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing & Submitting RFQ...</span>
                    ) : (
                      <>
                        <span>Submit Official RFQ Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 pt-32 text-center text-slate-400">Loading RFQ Form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
