import { useState } from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", course: "B.Tech CSE", age: 20 },
    { id: 2, name: "Priya Singh", course: "BCA", age: 21 },
    { id: 3, name: "Aman Kumar", course: "B.Tech IT", age: 20 },
    { id: 4, name: "Neha Verma", course: "MCA", age: 22 }
  ]);

  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id));
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) &&
    (course === "All" || student.course === course)
  );

  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px",
      background: "#f5f5f5"
    }}>
      <h1>Student Management</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <select
        value={course}
        onChange={e => setCourse(e.target.value)}
        style={{ padding: "10px" }}
      >
        <option value="All">All Courses</option>
        <option value="B.Tech CSE">B.Tech CSE</option>
        <option value="BCA">BCA</option>
        <option value="B.Tech IT">B.Tech IT</option>
        <option value="MCA">MCA</option>
      </select>

      {filteredStudents.map(student => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={deleteStudent}
        />
      ))}
    </div>
  );
}

export default App;