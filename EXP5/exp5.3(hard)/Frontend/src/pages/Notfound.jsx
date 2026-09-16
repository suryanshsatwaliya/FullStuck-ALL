import { Link } from "react-router";

function Notfound() {
  return (
    <>
      <style>{`
        .notfound-page {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--bg);
}

.notfound-card {
  max-width: 420px;
  padding: 46px;
  text-align: center;
  border-radius: var(--radius-lg);
}

.notfound-code {
  color: var(--accent-1);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
}

.notfound-title {
  margin: 14px 0 10px;
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  color: var(--ink);
}

.notfound-text {
  margin: 0 0 26px;
  color: var(--slate);
  font-size: 14px;
}

.notfound-link {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 999px;
  background: var(--gradient);
  color: #ffffff;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 700;
  box-shadow: var(--shadow-btn);
  transition: all 0.2s ease;
}

.notfound-link:hover {
  transform: translateY(-2px) scale(1.02);
}
      `}</style>

      <div className="notfound-page">
        <div className="notfound-card index-card">
          <div className="notfound-code">RECORD 404</div>
          <h1 className="notfound-title">Page not found</h1>
          <p className="notfound-text">
            There's no page filed under this address.
          </p>
          <Link className="notfound-link" to="/">
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Notfound;
