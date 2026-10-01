import type { Order, Product } from "./types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Joker Pro Lamp",
    slug: "joker-pro-lamp",
    price: 89,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "Minimal lighting for modern interiors and elegant desk setups.",
    rating: 4.8,
    badge: "Best seller",
  },
  {
    id: "p2",
    name: "Urban Speaker",
    slug: "urban-speaker",
    price: 149,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80",
    description: "High-fidelity sound in a compact, premium form factor.",
    rating: 4.9,
    badge: "New",
  },
  {
    id: "p3",
    name: "Travel Duffle",
    slug: "travel-duffle",
    price: 74,
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    description: "Strong, clean-lined travel bag for city movement and short trips.",
    rating: 4.7,
  },
  {
    id: "p4",
    name: "Desk Chair",
    slug: "desk-chair",
    price: 220,
    category: "Furniture",
    image:
      "https://images.unsplash.com/photo-1535221228881-c1a7ee7b02fa?auto=format&fit=crop&w=900&q=80",
    description: "Comfort-forward design for long work sessions and focused flow.",
    rating: 4.6,
  },
  {
    id: "p5",
    name: "Smart Watch",
    slug: "smart-watch",
    price: 199,
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "Track routines, workouts, and productivity from a stylish wrist piece.",
    rating: 4.8,
  },
  {
    id: "p6",
    name: "Canvas Tote",
    slug: "canvas-tote",
    price: 44,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "A clean everyday carry with good utility and premium texture.",
    rating: 4.5,
  },
];

export const orders: Order[] = [
  { id: "1042", customer: "Sara H.", total: 245, status: "Shipped" },
  { id: "1043", customer: "Omar A.", total: 310, status: "Pending" },
  { id: "1044", customer: "Nora K.", total: 198, status: "Processing" },
  { id: "1045", customer: "Adam T.", total: 520, status: "Delivered" },
];