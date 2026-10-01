import '../app/globals.css';
import { Header } from '../components/Header';
import { orders } from '../lib/mock-data';

export default function AdminPage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="admin-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Store overview</span>
            <h2>Admin dashboard</h2>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span>Total sales</span>
            <strong>$24,560</strong>
          </div>
          <div className="stat-box">
            <span>Orders</span>
            <strong>428</strong>
          </div>
          <div className="stat-box">
            <span>Customers</span>
            <strong>1,240</strong>
          </div>
          <div className="stat-box">
            <span>Returning rate</span>
            <strong>62%</strong>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.status}</td>
                  <td>${order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
