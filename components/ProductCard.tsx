"use client";

import type { Product } from "@/lib/types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const addToCart = () => {
    const raw = localStorage.getItem("joker-cart");
    const cart = raw ? JSON.parse(raw) : [];
    const existing = cart.find((item: { id: string }) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, quantity: 1 });
    }

    localStorage.setItem("joker-cart", JSON.stringify(cart));
    alert(`Added ${product.name} to cart!`);
    window.location.reload();
  };

  return (
    <article className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="product-body">
        <div className="product-topline">
          <span>{product.category}</span>
          {product.badge && <span className="badge">{product.badge}</span>}
        </div>

        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-footer">
          <span className="price">${product.price}</span>
          <button className="primary-btn" type="button" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}