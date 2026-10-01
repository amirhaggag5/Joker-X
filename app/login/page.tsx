import { Header } from "@/components/Header";

export default function LoginPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="auth-shell">
        <div className="auth-card">
          <span className="eyebrow">Welcome back</span>
          <h1>Sign in to Joker-X</h1>

          <form className="auth-form">
            <label>
              Email
              <input type="email" defaultValue="hello@jokerx.store" />
            </label>

            <label>
              Password
              <input type="password" defaultValue="password123" />
            </label>

            <button className="primary-btn" type="submit">
              Sign in
            </button>
          </form>

          <p className="mini-text">
            Need an account? <a href="/">Continue as guest</a>
          </p>
        </div>
      </section>
    </main>
  );
}