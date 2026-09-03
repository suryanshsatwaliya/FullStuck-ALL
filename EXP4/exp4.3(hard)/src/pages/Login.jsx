import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      <style>{`

        .login-page {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background:
    radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.16), transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(139, 92, 246, 0.14), transparent 40%),
    var(--ink);
}

.login-card {
  width: 100%;
  max-width: 410px;
  padding: 42px;
  border-radius: var(--radius-lg);
  animation: fadeSlideIn 0.4s ease;
}

.login-seal {
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: none;
  background: var(--gradient);
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.35);
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 800;
}

.login-card h2 {
  margin: 0;
  text-align: center;
  font-family: var(--font-display);
  color: var(--ink);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.login-subtitle {
  margin: 8px 0 30px;
  text-align: center;
  color: var(--slate);
  font-size: 14px;
}

.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;
  margin-bottom: 7px;
  color: var(--ink-soft);
  font-size: 13px;
  font-weight: 600;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  font-size: 15px;
}

.input-wrapper input {
  width: 100%;
  height: 48px;
  padding: 0 44px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  outline: none;
  background: var(--bg);
  color: var(--ink);
  font-size: 14px;
  transition: all 0.2s ease;
}

.input-wrapper input::placeholder {
  color: var(--muted);
}

.input-wrapper input:focus {
  background: var(--surface);
  border-color: var(--accent-1);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 14px;
}

.password-toggle:hover {
  color: var(--accent-1);
}

.login-button {
  width: 100%;
  height: 50px;
  margin-top: 8px;
  border: none;
  border-radius: var(--radius-sm);
  background: var(--gradient);
  color: #ffffff;
  font-size: 14.5px;
  font-weight: 700;
  box-shadow: var(--shadow-btn);
  transition: all 0.2s ease;
}

.login-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 14px 28px rgba(99, 102, 241, 0.35);
}

.login-hint {
  margin: 22px 0 0;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  background: var(--bg);
  border: 1px dashed var(--line);
  text-align: center;
  color: var(--slate);
  font-size: 12px;
}

.login-hint code {
  font-family: var(--font-body);
  color: var(--accent-1);
  font-weight: 700;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 22px;
  }

  .login-card h2 {
    font-size: 23px;
  }
}
      `}</style>

      <div className="login-page">
        <form className="login-card index-card" onSubmit={handleSubmit}>

          <div className="login-seal">
            S
          </div>

          <h2>Welcome Back</h2>
          <p className="login-subtitle">
            Sign in to continue to your dashboard
          </p>

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button className="login-button" type="submit">
            Sign In →
          </button>

          <p className="login-hint">
            Demo access — <code>admin@gmail.com</code> / <code>admin123</code>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
