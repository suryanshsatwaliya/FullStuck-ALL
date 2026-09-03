import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      {" | "}
      <Link to="/dashboard/students">Students</Link>
      {" | "}
      <Link to="/dashboard/courses">Courses</Link>
      {" | "}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;