export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  stat?: string;
  iconName: string;
}

export const MILESTONES_DATA: Milestone[] = [
  {
    year: "1998",
    title: "Foundation of Superfine Exports",
    subtitle: "Inception of Textile Legacy",
    description: "Established a modest yarn dyeing house in Gujarat with a commitment to precision color fastness and ethical textile manufacturing.",
    stat: "50,000 Mtrs/Mo Initial Capacity",
    iconName: "Building2"
  },
  {
    year: "2005",
    title: "Continuous Dyeing Unit Commissioning",
    subtitle: "Automated Tech Era",
    description: "Upgraded facility with high-speed continuous vat dyeing range and automated Datanet color kitchen for computer-controlled shade matching.",
    stat: "5,000,000 Mtrs/Yr Capacity",
    iconName: "Cpu"
  },
  {
    year: "2012",
    title: "Global Export Network Launch",
    subtitle: "Direct B2B Shipping",
    description: "Expanded direct export shipments to major apparel hubs in Germany, United Kingdom, USA, and United Arab Emirates.",
    stat: "25+ Country Footprint",
    iconName: "Globe2"
  },
  {
    year: "2018",
    title: "Zero Liquid Discharge (ZLD) Plant",
    subtitle: "Sustainable Water Recycling",
    description: "Invested $4.5M in state-of-the-art ZLD effluent treatment plant recycling 98% of process water and eliminating river discharge.",
    stat: "98% Water Recycling Rate",
    iconName: "Droplets"
  },
  {
    year: "2022",
    title: "OEKO-TEX Class I & GOTS 6.0",
    subtitle: "Organic & Non-Toxic Gold Standard",
    description: "Achieved highest international certifications for organic cotton processing and infant-grade non-toxic dyed textiles.",
    stat: "100% Non-Toxic Guarantee",
    iconName: "ShieldCheck"
  },
  {
    year: "2026",
    title: "Next-Gen Dyehouse & 25M Meters Capacity",
    subtitle: "Worldwide Export Supremacy",
    description: "Reached 25 Million meters annual export capacity operating with 3.5 MW rooftop solar and AI spectrophotometer shade control.",
    stat: "45+ Global Export Markets",
    iconName: "Award"
  }
];
