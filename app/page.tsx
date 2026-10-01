export const metadata = {
  title: 'Joker-X',
  description: 'Modern online storefront',
};

import '../app/globals.css';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/mock-data';

export default function HomePage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Fresh arrivals</span>
          <h1>Modern essentials for the everyday hustle.</h1>
          <p>
            Discover premium home, lifestyle, and tech picks built for comfort,
            style, and smarter living.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#catalog">
              Shop now
            </a>
            <a className="secondary-btn" href="/login">
              Sign in
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured products preview">
          <div className="feature-card large">
            <span>Best seller</span>
            <strong>Joker Pro Lamp</strong>
            <em>$89</em>
          </div>
          <div className="feature-card small">
            <span>New</span>
            <strong>Urban Speaker</strong>
            <em>$149</em>
          </div>
        </div>
      </section>

      <section className="promo-bar">
        <div>Free shipping over $150</div>
        <div>30-day returns</div>
        <div>Secure checkout</div>
      </section>

      <section id="catalog" className="catalog-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Hot picks</span>
            <h2>Featured collection</h2>
          </div>
          <a href="/cart">View cart</a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
