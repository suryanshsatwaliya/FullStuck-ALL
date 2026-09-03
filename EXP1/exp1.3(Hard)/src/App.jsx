import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import StudentList from "./StudentList";

function App() {

  const [showSidebar, setShowSidebar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const students = [
    { id: 1, name: "Rahul", course: "B.Tech CSE", grade: "A" },
    { id: 2, name: "Priya", course: "BCA", grade: "A+" },
    { id: 3, name: "Aman", course: "MCA", grade: "B+" },
    { id: 4, name: "Sneha", course: "B.Tech AI", grade: "A" },
    { id: 5, name: "Karan", course: "BSc IT", grade: "B" }
  ];

  return (
    <>
      <Header title="Academic Dashboard" />

      <button onClick={() => setShowSidebar(!showSidebar)}>
        {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      <button onClick={() => setShowFooter(!showFooter)}>
        {showFooter ? "Hide Footer" : "Show Footer"}
      </button>

      {showSidebar && <Sidebar />}

      <StudentList students={students} />

      {showFooter && <Footer />}
    </>
  );
}

export default App;