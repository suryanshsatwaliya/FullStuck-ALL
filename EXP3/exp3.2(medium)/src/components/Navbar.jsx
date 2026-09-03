import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/students">Students</Link>
      {" | "}
      <Link to="/add">Add Student</Link>
    </nav>
  );
}

export default Navbar;