# JOKER Store (Next.js + Supabase)
1. `npm install`, copy `.env.example` to `.env.local`, fill Supabase URL and anon key.
2. Supabase SQL Editor: run `supabase/schema.sql` once.
3. First admin: Authentication > Users > Add user, then run
   `insert into admins(user_id) select id from auth.users where email='YOU@EMAIL';`
4. `npm run dev`, sign in at `/login`, open `/admin`.
5. Deploy: push to GitHub, import on vercel.com, add the same env vars.
Built: schema, auth, customer account, addresses, wishlist, admin (products + full product edit + variants + images, orders, categories, coupons, customers, analytics, settings incl. static pages), cart, COD checkout, inventory handling, sitemap and SEO metadata. Online card payment is not included; checkout is COD. Static pages (about, contact, faq, privacy, terms, returns, shipping) are edited in Admin > Settings.

Run supabase/schema.sql on a NEW database. For an existing database, `npm run db:migrate` detects an already-created base schema and uses `001_init.sql` as the baseline before applying later migrations. Build should be checked with npm install && npm run build after installing dependencies.

## Variant pricing
Each variant has an optional own price (Admin > Edit product). Empty means the product price is used. Checkout reads it from the database only.
## Database migrations
`DATABASE_URL` in `.env.local`, then `npm run db:migrate` (applies supabase/migrations/*.sql once each). Or paste `supabase/schema.sql` (full snapshot) into the Supabase SQL editor on a new project.
## SEO
Set `NEXT_PUBLIC_SITE_URL` to your domain (falls back to Vercel's production URL). Canonical, Open Graph, Twitter, robots.txt and sitemap.xml use it.
## Vercel
Framework Next.js, build `next build`, no vercel.json needed. Env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SITE_URL.


-- Final hardening snapshot (equivalent to migration 004)
DROP POLICY IF EXISTS r_var ON product_variants;
CREATE POLICY r_var ON product_variants FOR SELECT USING (EXISTS (SELECT 1 FROM products p WHERE p.id=product_id AND (p.status='active' OR is_admin())));
ALTER TABLE coupons DROP CONSTRAINT IF EXISTS coupons_percent_value_check;
ALTER TABLE coupons ADD CONSTRAINT coupons_percent_value_check CHECK (type <> 'percent' OR value <= 100) NOT VALID;
ALTER TABLE coupons DROP CONSTRAINT IF EXISTS coupons_min_order_check;
ALTER TABLE coupons ADD CONSTRAINT coupons_min_order_check CHECK (min_order >= 0) NOT VALID;
ALTER TABLE coupons DROP CONSTRAINT IF EXISTS coupons_usage_limit_check;
ALTER TABLE coupons ADD CONSTRAINT coupons_usage_limit_check CHECK (usage_limit IS NULL OR usage_limit >= 0) NOT VALID;
CREATE INDEX IF NOT EXISTS products_status_idx ON products(status);
CREATE INDEX IF NOT EXISTS product_variants_product_id_idx ON product_variants(product_id);
CREATE INDEX IF NOT EXISTS orders_user_id_created_at_idx ON orders(user_id, created_at DESC);
