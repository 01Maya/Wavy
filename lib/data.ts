export const navLinks = [
  { href: "#plans", id: "plans", label: "Our Plan" },
  { href: "#dest", id: "dest", label: "Destinations" },
  { href: "#why", id: "why", label: "Why Wavy" },
] as const;

export type Destination = { name: string; sub: string };

export const destinations: Record<"popular" | "regional" | "all", Destination[]> = {
  popular: [
    { name: "Saudi Arabia", sub: "Umrah & Hajj" },
    { name: "Italy", sub: "Rome & Florence" },
    { name: "Turkey", sub: "Istanbul & Cappadocia" },
    { name: "Sudan", sub: "Khartoum" },
    { name: "Japan", sub: "Tokyo, Kyoto & Osaka" },
    { name: "United States", sub: "Coast to Coast" },
  ],
  regional: [
    { name: "Europe", sub: "39 countries" },
    { name: "Asia", sub: "20 countries" },
    { name: "Americas", sub: "12 countries" },
    { name: "Middle East", sub: "10 countries" },
    { name: "Oceania", sub: "6 countries" },
    { name: "Africa", sub: "18 countries" },
  ],
  all: [
    { name: "France", sub: "Paris & Riviera" },
    { name: "Spain", sub: "Madrid & Barcelona" },
    { name: "Thailand", sub: "Bangkok & Phuket" },
    { name: "UAE", sub: "Dubai & Abu Dhabi" },
    { name: "United Kingdom", sub: "London & beyond" },
    { name: "India", sub: "Delhi to Goa" },
  ],
};

export const marqueeFlags = [
  "Italy", "Turkey", "Japan", "United States", "Saudi Arabia",
  "Thailand", "Spain", "France", "United Kingdom", "India",
];

export const appChips = ["Maps", "Chat", "Video", "Music", "Banking", "Rides"];

export type Cell = boolean | string;
export const comparisonRows: { label: string; wavy: Cell; local: Cell; roaming: Cell }[] = [
  { label: "Ready before landing", wavy: true, local: false, roaming: true },
  { label: "Fixed, clear pricing", wavy: true, local: "Varies", roaming: false },
  { label: "Keep your own number", wavy: true, local: false, roaming: true },
  { label: "No store visits", wavy: true, local: false, roaming: true },
  { label: "Live usage tracking", wavy: true, local: false, roaming: "Limited" },
  { label: "Share with family", wavy: true, local: false, roaming: false },
  { label: "24/7 support", wavy: true, local: false, roaming: "Varies" },
];

export const reviews = [
  { name: "Amira K.", place: "Istanbul, Turkey", quote: "Landed in Istanbul and had data before the gate. Zero setup.", avatar: 0 },
  { name: "Priya S.", place: "Bangkok, Thailand", quote: "Live usage tracking means I never run out mid-trip.", avatar: 2 },
];
export const photoReview = {
  name: "Daniel R.",
  quote: "Sharing a plan with my family saved us a fortune in Japan.",
};

export const faqs = [
  { q: "What is an eSIM?", a: "A digital SIM built into your phone. Install it with a tap, no plastic card." },
  { q: "Is my phone compatible?", a: "Most phones from 2019 onward support eSIM. The app checks for you." },
  { q: "When does my plan start?", a: "When you connect to a network at your destination." },
  { q: "Can I top up?", a: "Yes. Add more data in the app whenever you need it." },
];

export const footerColumns = [
  { title: "Product", links: [{ label: "Plans", href: "#plans" }, { label: "Destinations", href: "#dest" }, { label: "How it works", href: "#how" }] },
  { title: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Press", href: "#" }] },
  { title: "Support", links: [{ label: "Help center", href: "#faq" }, { label: "Contact", href: "#" }, { label: "Privacy", href: "#" }] },
];
