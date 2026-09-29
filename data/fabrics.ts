export interface Fabric {
  id: string;
  name: string;
  type: 'Cotton' | 'Rayon' | 'Poly-Cotton' | 'Linen' | 'Blended';
  gsm: number;
  width: string;
  composition: string;
  dyeingMethod: string;
  moq: string;
  colors: string[];
  image: string;
  shortDescription: string;
  specs: {
    weave: string;
    yarnCount: string;
    colorFastness: string;
    shrinkage: string;
    finishes: string[];
    certification: string[];
    leadTime: string;
  };
}

export const FABRICS_DATA: Fabric[] = [
  {
    id: "sf-c101",
    name: "Royal Imperial Combed Cotton Twill",
    type: "Cotton",
    gsm: 240,
    width: '58/60"',
    composition: "100% Combed Organic Cotton",
    dyeingMethod: "Continuous Vat Dyeing",
    moq: "1,000 meters / color",
    colors: ["Deep Indigo", "Midnight Navy", "Warm Terracotta", "Forest Olive", "Charcoal Gray"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "Ultra-durable combed cotton twill engineered for premium workwear, trousers, and structured outerwear with rich color depth.",
    specs: {
      weave: "2/1 Z-Twill",
      yarnCount: "20s x 16s",
      colorFastness: "4-5 Grade (ISO 105-B02)",
      shrinkage: "< 2.5%",
      finishes: ["Sanforized", "Mercerized", "Soft Touch"],
      certification: ["OEKO-TEX Class I", "GOTS 6.0"],
      leadTime: "15-20 Days"
    }
  },
  {
    id: "sf-r201",
    name: "Eco-Viscose Silky Rayon Poplin",
    type: "Rayon",
    gsm: 135,
    width: '56/58"',
    composition: "100% FSC-Certified Bamboo Viscose",
    dyeingMethod: "Cold Pad Batch Reactive Dyeing",
    moq: "1,200 meters / color",
    colors: ["Saffron Gold", "Crimson Red", "Sage Green", "Ocean Blue", "Ivory White"],
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "Fluid drape and silky sheen featuring eco-friendly reactive dyeing. Ideal for high-end fashion apparel, resortwear, and blouses.",
    specs: {
      weave: "Plain Weave Poplin",
      yarnCount: "30s x 30s",
      colorFastness: "4 Grade",
      shrinkage: "< 3.0%",
      finishes: ["Silky Soft Finish", "Anti-Wrinkle"],
      certification: ["OEKO-TEX Standard 100", "REACH Compliant"],
      leadTime: "14-18 Days"
    }
  },
  {
    id: "sf-pc301",
    name: "Heavy-Duty Poly-Cotton Uniform Canvas",
    type: "Poly-Cotton",
    gsm: 280,
    width: '58/60"',
    composition: "65% Polyester / 35% Combed Cotton",
    dyeingMethod: "Thermosol High-Temp Continuous Dyeing",
    moq: "2,000 meters / color",
    colors: ["Khaki Tan", "Navy Officer", "Security Black", "Industrial Gray", "High-Vis Green"],
    image: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "High tensile strength poly-cotton fabric designed for institutional uniforms, medical scrubs, and heavy industrial workwear.",
    specs: {
      weave: "Duck Canvas / Oxford",
      yarnCount: "16s x 12s",
      colorFastness: "4-5 Grade (High Chlorine Resistance)",
      shrinkage: "< 1.5%",
      finishes: ["Soil Release", "Water Repellent", "Anti-Pilling"],
      certification: ["ISO 9001:2015", "OEKO-TEX Standard 100"],
      leadTime: "12-15 Days"
    }
  },
  {
    id: "sf-l401",
    name: "Pure European Flax Linen Slub",
    type: "Linen",
    gsm: 190,
    width: '54/56"',
    composition: "100% Sustainable European Flax Linen",
    dyeingMethod: "Eco Indigo & Natural Pigment Dyeing",
    moq: "800 meters / color",
    colors: ["Raw Indigo", "Linen Sand", "Clay Terracotta", "Olive Drab", "Natural Bleached"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "Authentic textured slub linen with high breathability and signature slub aesthetic. Pre-washed for luxurious hand feel.",
    specs: {
      weave: "Slub Plain Weave",
      yarnCount: "14s x 14s Slub",
      colorFastness: "4 Grade",
      shrinkage: "< 3.5%",
      finishes: ["Enzyme Garment Washed", "Softened"],
      certification: ["European Flax Certified", "GOTS Organic"],
      leadTime: "20-25 Days"
    }
  },
  {
    id: "sf-b501",
    name: "Linen-Cotton Blend Summer Chambray",
    type: "Blended",
    gsm: 160,
    width: '58/60"',
    composition: "55% European Linen / 45% Organic Cotton",
    dyeingMethod: "Yarn-Dyed Indigo & Solid Jet Dyeing",
    moq: "1,000 meters / color",
    colors: ["Sky Chambray", "Denim Blue", "Dusty Rose", "Sage Mist", "Washed Charcoal"],
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "Perfect blend of linen crispness and cotton softness. Highly versatile for casual shirting, summer dresses, and lifestyle textiles.",
    specs: {
      weave: "Chambray Plain Weave",
      yarnCount: "24s x 24s Blend",
      colorFastness: "4-5 Grade",
      shrinkage: "< 2.0%",
      finishes: ["Bio-Polish Wash", "Easy Care"],
      certification: ["OEKO-TEX Class I", "GOTS Blend"],
      leadTime: "15-18 Days"
    }
  },
  {
    id: "sf-c102",
    name: "Mercerized Cotton Satin Dyewash",
    type: "Cotton",
    gsm: 210,
    width: '58/60"',
    composition: "100% Mercerized Long-Staple Cotton",
    dyeingMethod: "Reactive Jet Continuous Dyeing",
    moq: "1,500 meters / color",
    colors: ["Deep Emerald", "Royal Burgundy", "Imperial Navy", "Gold Ochre", "Jet Black"],
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "High-luster mercerized cotton satin featuring exceptional color brilliance, silk-like touch, and high colorfastness.",
    specs: {
      weave: "4/1 Satin Weave",
      yarnCount: "40s x 40s Compact",
      colorFastness: "4-5 Grade",
      shrinkage: "< 2.0%",
      finishes: ["Double Mercerized", "Silk Touch"],
      certification: ["OEKO-TEX Class I", "ZDHC Level 3"],
      leadTime: "15-20 Days"
    }
  },
  {
    id: "sf-r202",
    name: "Viscose-Modal Slub Twill",
    type: "Rayon",
    gsm: 175,
    width: '56/58"',
    composition: "70% Tencel Modal / 30% Bamboo Viscose",
    dyeingMethod: "Eco-Friendly Jet Reactive Dyeing",
    moq: "1,000 meters / color",
    colors: ["Earthy Terracotta", "Olive Drab", "Warm Ochre", "Dusty Violet", "Soft Black"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "Eco-friendly modal blend with rich slub texture and butter-soft feel. Ideal for premium ladieswear and fluid tailoring.",
    specs: {
      weave: "Slub Twill 2/2",
      yarnCount: "30s x 20s Modal Slub",
      colorFastness: "4 Grade",
      shrinkage: "< 2.5%",
      finishes: ["Peach Touch Finish", "Bio-Washed"],
      certification: ["Lenzing Modal Certified", "OEKO-TEX"],
      leadTime: "16-20 Days"
    }
  },
  {
    id: "sf-b502",
    name: "Cotton-Tencel Twill Chino",
    type: "Blended",
    gsm: 220,
    width: '58/60"',
    composition: "60% Organic Cotton / 40% Tencel Lyocell",
    dyeingMethod: "Continuous Pigment Dyewash",
    moq: "1,000 meters / color",
    colors: ["Classic Chino Beige", "Washed Slate", "Army Olive", "Indigo Wash", "Mocha Brown"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
    shortDescription: "Sustainable eco-blend delivering casual luxury, wrinkle resistance, and high breathability for premium pants and casual suits.",
    specs: {
      weave: "3/1 Left-Hand Twill",
      yarnCount: "20s x 20s Compact Blend",
      colorFastness: "4-5 Grade",
      shrinkage: "< 2.0%",
      finishes: ["Vintage Pigment Wash", "Soft Touch"],
      certification: ["GOTS Organic", "OEKO-TEX Standard 100"],
      leadTime: "15-18 Days"
    }
  }
];

export const FABRIC_CATEGORIES = [
  { id: "all", label: "All Fabrics" },
  { id: "Cotton", label: "100% Cotton" },
  { id: "Rayon", label: "Rayon & Viscose" },
  { id: "Poly-Cotton", label: "Poly-Cotton Blends" },
  { id: "Linen", label: "Pure Linen" },
  { id: "Blended", label: "Specialty Blends" },
];
