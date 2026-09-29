export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "news-1",
    title: "Superfine Exports Unveils Eco-Indigo Rope Dyeing Line with 40% Water Savings",
    category: "Sustainability & Innovation",
    date: "September 12, 2026",
    readTime: "4 min read",
    summary: "Our new closed-loop eco-indigo line combines natural plant extracts with ultrasonic reduction technology to deliver authentic indigo shades while drastically cutting chemical usage.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-2",
    title: "Exhibiting at Premiere Vision Paris 2026: Showcasing High-Fastness Organic Twills",
    category: "Corporate & Trade Shows",
    date: "August 28, 2026",
    readTime: "3 min read",
    summary: "Join Superfine Exports at Hall 5, Stand C42 in Paris where we present our Autumn/Winter 2027 organic cotton and linen-slub fabric collections to European fashion buyers.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-3",
    title: "Achieved ZDHC Level 3 Conformance for Clean Waterways and Dyehouse Safety",
    category: "Compliance & ESG",
    date: "July 19, 2026",
    readTime: "5 min read",
    summary: "Following rigorous independent audits by ZDHC accredited verifiers, Superfine Exports has achieved Level 3 status, reinforcing our commitment to zero toxic chemical discharge.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
  }
];
