export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  badge?: string;
};

export type CartItem = {
  id: string;
  quantity: number;
};

export type Order = {
  id: string;
  customer: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
};