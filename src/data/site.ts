// ============================================================
// SHAKE N BITE — EDITABLE SITE CONFIG
// Change anything here (numbers, links, products, weights)
// and the whole site updates. No code changes needed.
// ============================================================

import makhanaPack from "@/assets/makhana-pack.png.asset.json";
import jaggeryPack from "@/assets/jaggery-pack.png";
import sattuPack from "@/assets/sattu-pack.png";
import chanaPack from "@/assets/chana-pack.png";

export const SITE = {
  brand: "Shake N Bite",
  tagline: "Sattu La Naya Awtaar, Kato Gholo Peelo Yaar",
  whatsappNumber: "919432120670", // +91 94321 20670
  whatsappDisplay: "+91 94321 20670",
  email: "hello@shakenbite.in",
  address: "Darbhanga, Mithila, Bihar, India",
  instagramUrl: "https://instagram.com/shakenbite",
  facebookUrl: "https://facebook.com/shakenbite",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const MESSAGES = {
  floating: "Hi Shake N Bite, I want to know more about your products.",
  hero: "Hi Shake N Bite, I want to order your snacks. Please share details.",
  bulk: "Hi, I want to enquire about bulk/retail orders.",
  howToOrder: "Hi Shake N Bite, I want to place an order.",
  product: (name: string, weight: string) =>
    `Hi Shake N Bite, I want to enquire about ${name} (${weight}). Please share price and availability.`,
  multi: (items: { name: string; weight: string }[]) =>
    `Hi Shake N Bite, I want to enquire about:\n${items
      .map((i) => `• ${i.name} (${i.weight})`)
      .join("\n")}\nPlease share price and availability.`,
};

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  weights: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "makhana",
    name: "Makhana",
    subtitle: "Roasted & Lightly Salted",
    description:
      "Handpicked fox nuts from Mithila, slow-roasted for the perfect crunch.",
    image: (makhanaPack as { url: string }).url,
    weights: ["250g", "500g", "1kg"],
  },
  {
    id: "jaggery",
    name: "Jaggery",
    subtitle: "Pure & Natural Gud",
    description:
      "Chemical-free golden gud, made the traditional way from fresh sugarcane.",
    image: jaggeryPack,
    weights: ["500g", "1kg"],
  },
  {
    id: "sattu",
    name: "Sattu",
    subtitle: "Roasted Chana Flour",
    description:
      "The original superfood of Bihar — protein-rich, cooling and filling.",
    image: sattuPack,
    weights: ["500g", "1kg"],
  },
  {
    id: "chana",
    name: "Chana",
    subtitle: "Roasted & Crunchy",
    description:
      "Crunchy roasted chana, a guilt-free snack for any time of the day.",
    image: chanaPack,
    weights: ["250g", "500g", "1kg"],
  },
];

export const FAQS = [
  {
    q: "Where do you deliver?",
    a: "We deliver across India through trusted courier partners. Delivery charges and timelines are shared on WhatsApp when you place your enquiry.",
  },
  {
    q: "Is there a minimum order?",
    a: "No strict minimum for retail packs — even a single 250g pack is welcome. For bulk and gifting orders, minimum quantities depend on the product; message us and we'll work it out.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Payment is discussed and confirmed on WhatsApp. We accept UPI, bank transfer and other common methods — whatever is convenient for you.",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Makhana and roasted chana stay fresh for 4–6 months in an airtight container. Jaggery and sattu are best consumed within 3–4 months. Every pack is sealed fresh before dispatch.",
  },
  {
    q: "Do you take bulk, retail or gifting orders?",
    a: "Yes! We supply to retailers, offices and for festive gifting with custom packing options. Send us a WhatsApp message with your requirement and we'll share a quote.",
  },
];
