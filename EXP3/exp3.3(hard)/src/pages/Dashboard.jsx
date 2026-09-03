import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const totalStudents = 50;
  const totalCourses = 8;
  const activeStudents = 42;

  return (
    <div>
      <Navbar />

      <h1>Admin Dashboard</h1>

      <h2>Student Statistics</h2>

      <p>Total Students: {totalStudents}</p>
      <p>Active Students: {activeStudents}</p>
      <p>Total Courses: {totalCourses}</p>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;