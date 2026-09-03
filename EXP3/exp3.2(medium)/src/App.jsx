import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import AddStudent from "./pages/AddStudent";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      course: "B.Tech CSE",
      age: 20,
    },
    {
      id: 2,
      name: "Priya Singh",
      course: "BCA",
      age: 21,
    },
    {
      id: 3,
      name: "Aman Kumar",
      course: "B.Tech IT",
      age: 20,
    },
  ]);

  function addStudent(name, course, age) {
    const newStudent = {
      id: students.length + 1,
      name: name,
      course: course,
      age: Number(age),
    };

    setStudents([...students, newStudent]);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/students"
          element={<Students students={students} />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetail students={students} />}
        />

        <Route
          path="/add"
          element={<AddStudent addStudent={addStudent} />}
        />
      </Routes>
    </>
  );
}

export default App;