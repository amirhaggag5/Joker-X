"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem("joker-cart");
    if (!raw) return;
    try {
      const cart = JSON.parse(raw) as Array<{ id: string; quantity: number }>;
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    } catch {}
  }, []);

  return (
    <header className="topbar">
      <Link href="/" className="brand">
        <span className="brand-mark">J</span>
        <span>Joker-X</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/#catalog">Shop</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </nav>

      <div className="nav-actions">
        <Link href="/cart" className="secondary-btn">
          Cart ({cartCount})
        </Link>
      </div>
    </header>
  );
}