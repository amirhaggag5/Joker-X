"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { products } from "@/lib/data";

type CartEntry = {
  id: string;
  quantity: number;
};

export default function CartPage() {
  const [items, setItems] = useState<CartEntry[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("joker-cart");
    if (!raw) return;
    try {
      setItems(JSON.parse(raw));
    } catch {
      setItems([]);
    }
  }, []);

  const entries = items
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return null;
      return {
        ...product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter(Boolean) as Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    lineTotal: number;
    image: string;
  }>;

  const subtotal = entries.reduce((sum, item) => sum + item.lineTotal, 0);

  return (
    <main className="page-shell">
      <Header />

      <section className="cart-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Your basket</span>
            <h2>Shopping cart</h2>
          </div>
        </div>

        {entries.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>
            <a href="/" className="primary-btn">
              Continue shopping
            </a>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {entries.map((item) => (
                <div key={item.id} className="cart-item">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <strong>${item.lineTotal}</strong>
                </div>
              ))}
            </div>

            <aside className="summary-box">
              <h3>Order summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${subtotal}</strong>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <strong>${subtotal}</strong>
              </div>

              <button className="primary-btn full-width" type="button">
                Checkout
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}