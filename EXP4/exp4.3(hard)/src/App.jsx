import { useState } from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import StudentList from './pages/StudentList';
import StudentProfile from './pages/StudentProfile';
import ProtectedRoutes from './components/ProtectedRoutes';
import AddStudent from './pages/AddStudent';
import Notfound from './pages/Notfound';
import initialdata from './data/student';

function App() {

  // Load students from localStorage
  const [students, setStudents] = useState(() => {

    const savedStudents = localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : initialdata;

  });


  // ADD STUDENT
  function addStudent(formdata) {

    setStudents((previous) => {

      const newId =
        previous.length > 0
          ? Math.max(...previous.map(student => student.id)) + 1
          : 1;

      const updatedStudents = [
        ...previous,
        {
          id: newId,
          ...formdata
        }
      ];

      // Save updated students
      localStorage.setItem(
        "students",
        JSON.stringify(updatedStudents)
      );

      return updatedStudents;
    });
  }


  // DELETE STUDENT
  function deleteStudent(id) {

    setStudents((previous) => {

      const updatedStudents = previous.filter(
        student => student.id !== id
      );

      // Save updated students
      localStorage.setItem(
        "students",
        JSON.stringify(updatedStudents)
      );

      return updatedStudents;
    });
  }


  return (
    <>
      <NavBar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard students={students} />
            </ProtectedRoutes>
          }
        >

          <Route
            path="studentlist"
            element={
              <StudentList
                students={students}
                deleteStudent={deleteStudent}
              />
            }
          />

          <Route
            path="profile/:id"
            element={
              <StudentProfile
                students={students}
              />
            }
          />

          <Route
            path="addstudent"
            element={
              <AddStudent
                addStudent={addStudent}
              />
            }
          />

        </Route>


        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="*"
          element={<Notfound />}
        />

      </Routes>

    </>
  );
}

export default App;
