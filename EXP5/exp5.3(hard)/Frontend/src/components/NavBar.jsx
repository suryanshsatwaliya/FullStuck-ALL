import { NavLink, Link, useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="brand">
          <div className="brand-logo">S</div>

          <div className="brand-text">
            <span className="brand-name">StudentHub</span>
            <span className="brand-subtitle">
              Student Management System
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/studentlist"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Students
              </NavLink>

              <NavLink
                to="/dashboard/addstudent"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Add Student
              </NavLink>

              <button
                className="logout-nav-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}

          {!isLoggedIn && (
            <Link to="/login" className="login-nav-btn">
              Login →
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
