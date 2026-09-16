import React from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import StudentList from './pages/StudentList'
import StudentProfile from './pages/StudentProfile'
import ProtectedRoutes from './components/ProtectedRoutes'
import AddStudent from './pages/AddStudent'
import initialdata from './data/student'
import { useState } from 'react'
function App() {
  const [students, setStudents] = useState(initialdata)


  function addStudent(formdata) {
    setStudents((previous) => [
      ...previous,
      {
        id: students.length + 1,
        ...formdata
      }

    ])
    
  }
  
  function deleteStudents() {
  
}

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard students={students} />
          </ProtectedRoutes>

        } >


          <Route path='studentlist' element={<StudentList students={students} />} />
          <Route path="profile/:id" element={<StudentProfile students={ students} />} />
          <Route path='addstudent' element={<AddStudent addStudent={addStudent} />} />
          
        </Route>

        /* 1./dashboard
        2./dashboard/studentlist
        3/dashbord/profile */


        <Route path='/login' element={<Login />} />


      </Routes>
    </>


  )
}

export default App