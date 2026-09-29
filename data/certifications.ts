export interface Certification {
  id: string;
  name: string;
  shortCode: string;
  category: string;
  description: string;
  issuedBy: string;
  validUntil: string;
  badgeBg: string;
  badgeTextColor: string;
  downloadUrl: string;
  highlights: string[];
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-oeko",
    name: "OEKO-TEX® Standard 100 Class I",
    shortCode: "OEKO-TEX 100",
    category: "Safety & Non-Toxicity",
    description: "Highest level OEKO-TEX certification guaranteeing fabrics are 100% free from harmful substances, heavy metals, and carcinogenic dyes. Certified safe for infant and direct skin contact.",
    issuedBy: "TESTEX AG, Zurich, Switzerland",
    validUntil: "December 2027",
    badgeBg: "bg-emerald-950/80 border-emerald-500/30",
    badgeTextColor: "text-emerald-400",
    downloadUrl: "#download-oeko-tex-pdf",
    highlights: ["Tested for 300+ harmful chemicals", "Zero banned azo dyes", "Certified for Baby Class I garments", "Annual audit compliance"]
  },
  {
    id: "cert-gots",
    name: "Global Organic Textile Standard (GOTS 6.0)",
    shortCode: "GOTS ORGANIC",
    category: "Organic & Environmental Standard",
    description: "The world's premier processing standard for organic fibers, encompassing strict ecological and social criteria along the entire organic textiles supply chain.",
    issuedBy: "Control Union Certifications",
    validUntil: "October 2027",
    badgeBg: "bg-teal-950/80 border-teal-500/30",
    badgeTextColor: "text-teal-300",
    downloadUrl: "#download-gots-pdf",
    highlights: ["Min. 95% certified organic cotton fiber", "No synthetic chemical pesticides used", "Strict wastewater & chemical management", "Fair labor ILO standards compliance"]
  },
  {
    id: "cert-iso9001",
    name: "ISO 9001:2015 Quality Management System",
    shortCode: "ISO 9001:2015",
    category: "Quality Assurance",
    description: "International standard for quality management systems ensuring consistent batch-to-batch color matching, tensile strength testing, and standardized export packaging.",
    issuedBy: "TÜV SÜD South Asia",
    validUntil: "June 2028",
    badgeBg: "bg-blue-950/80 border-blue-500/30",
    badgeTextColor: "text-blue-300",
    downloadUrl: "#download-iso9001-pdf",
    highlights: ["Full batch traceability from yarn to fabric", "Spectrophotometer Delta-E < 0.5 color matching", "100% pre-shipment inspection protocol", "Continuous quality improvement framework"]
  },
  {
    id: "cert-reach",
    name: "REACH EU Compliance (SVHC Free)",
    shortCode: "REACH EU",
    category: "Chemical Regulation",
    description: "Full compliance with European Union Regulation (EC) No 1907/2006 (REACH) governing the safe manufacture and export of textile products into all EU member states.",
    issuedBy: "Bureau Veritas Consumer Products Services",
    validUntil: "Permanent (Updated per Annex XVII)",
    badgeBg: "bg-indigo-950/80 border-indigo-500/30",
    badgeTextColor: "text-indigo-300",
    downloadUrl: "#download-reach-pdf",
    highlights: ["Substances of Very High Concern (SVHC) free", "EU export compliant", "Formaldehyde < 20 ppm", "Phthalates and heavy metals compliant"]
  },
  {
    id: "cert-zdhc",
    name: "ZDHC Roadmap to Zero Level 3",
    shortCode: "ZDHC LEVEL 3",
    category: "Clean Dyehouse Operations",
    description: "Highest ZDHC conformance level confirming zero discharge of hazardous chemicals in manufacturing, chemical input management, and advanced effluent purification.",
    issuedBy: "ZDHC Foundation, Amsterdam",
    validUntil: "March 2027",
    badgeBg: "bg-amber-950/80 border-amber-500/30",
    badgeTextColor: "text-amber-400",
    downloadUrl: "#download-zdhc-pdf",
    highlights: ["Zero liquid discharge (ZLD) plant operations", "98% water recycling efficiency", "MRSL v3.1 chemical input verification", "Sludge-free eco discharge system"]
  },
  {
    id: "cert-iso14001",
    name: "ISO 14001:2015 Environmental Management",
    shortCode: "ISO 14001",
    category: "Environmental Stewardship",
    description: "Certified environmental management framework driving energy reduction, renewable solar power adoption, and sustainable waste recycling across all mill operations.",
    issuedBy: "SGS International",
    validUntil: "November 2027",
    badgeBg: "bg-emerald-950/80 border-emerald-500/30",
    badgeTextColor: "text-emerald-300",
    downloadUrl: "#download-iso14001-pdf",
    highlights: ["3.5 MW Rooftop solar power generation", "Zero carbon footprint roadmap", "Sludge reuse in eco-bricks", "Energy reduction audit compliance"]
  }
];
