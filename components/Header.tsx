@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f5f3ef;
  --panel: #ffffff;
  --panel-alt: #f1eee8;
  --ink: #171717;
  --muted: #5f5a52;
  --line: #e2dfd6;
  --brand: #d97706;
  --brand-dark: #a15800;
  --success: #1a7f5a;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--ink);
}

a { color: inherit; text-decoration: none; }

button, input {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 16px 20px;
  position: sticky;
  top: 16px;
  z-index: 20;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 800;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #111827, #f59e0b);
  color: white;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-weight: 600;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-btn, .secondary-btn {
  border: none;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-btn {
  background: var(--brand);
  color: white;
  font-weight: 700;
}

.primary-btn:hover { background: var(--brand-dark); }

.secondary-btn {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: center;
  padding: 36px 0 18px;
}

.hero-copy {
  background: linear-gradient(135deg, #fff, #f6efe7);
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 34px;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  line-height: 1.05;
  margin: 12px 0 16px;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 24px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-dark);
  font-weight: 700;
}

.hero-visual {
  display: grid;
  gap: 16px;
  min-height: 360px;
}

.feature-card {
  background: linear-gradient(170deg, #1f2937, #111827);
  color: white;
  border-radius: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 200px;
  box-shadow: 0 20px 40px rgba(17,24,39,0.14);
}

.feature-card.large {
  min-height: 240px;
}

.feature-card span,
.feature-card em {
  opacity: 0.8;
}

.feature-card strong {
  font-size: 2rem;
  margin: 12px 0 10px;
}

.promo-bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 14px 0 30px;
}

.promo-bar > div {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 20px;
  font-weight: 600;
  text-align: center;
}

.catalog-section, .admin-shell, .auth-shell, .cart-shell {
  padding-top: 8px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 8px 0 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 30px rgba(17, 24, 39, 0.08);
}

.product-image {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.product-body {
  padding: 18px 18px 20px;
}

.product-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.product-topline span {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 600;
}

.product-body h3 {
  margin: 0 0 8px;
  font-size: 1.25rem;
}

.product-body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  min-height: 56px;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
}

.price {
  font-size: 1.3rem;
  font-weight: 800;
}

.auth-shell {
  min-height: 70vh;
  display: grid;
  place-items: center;
}

.auth-card {
  width: min(100%, 460px);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 30px;
}

.auth-card h1 {
  margin: 10px 0 20px;
  font-size: 2rem;
}

.auth-form {
  display: grid;
  gap: 16px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.auth-form input {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 14px;
  background: #f9f9f7;
}

.mini-text {
  color: var(--muted);
  text-align: center;
  margin-top: 18px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
  margin-bottom: 30px;
}

.stat-box {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 18px;
}

.stat-box span {
  color: var(--muted);
  display: block;
}

.stat-box strong {
  display: block;
  margin-top: 12px;
  font-size: 1.8rem;
}

.table-wrap {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: var(--panel-alt);
}

th, td {
  text-align: left;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
}

.cart-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
}

.cart-items {
  display: grid;
  gap: 16px;
}

.cart-item {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 14px;
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 16px;
  align-items: center;
}

.thumb {
  width: 100px;
  height: 100px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
}

.summary-box {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 20px;
  height: max-content;
}

.summary-box h3 {
  margin-top: 0;
  font-size: 1.4rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}

.summary-row.total {
  border-bottom: none;
  color: var(--ink);
  font-size: 1.1rem;
}

.full-width {
  width: 100%;
  margin-top: 18px;
}

.empty-state {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 40px 24px;
  text-align: center;
}

@media (max-width: 880px) {
  .hero, .cart-layout {
    grid-template-columns: 1fr;
  }

  .promo-bar {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }
}
