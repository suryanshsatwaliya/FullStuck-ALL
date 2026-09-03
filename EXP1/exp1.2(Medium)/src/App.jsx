import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import StudentCard from "./StudentCard";

function App() {
  const students = [
    { id: 1,
      name: "Aman", 
      age: 20, 
      course: "BCA", 
      grade: "A" 
    },
    { id: 2, 
      name: "Rahul",
      age: 21, 
      course: "B.Tech", 
      grade: "B+"
    },
    { id: 3,
       name: "Priya", 
       age: 19,
       course: "B.Sc",
      grade: "A+" 
      },
    { id: 4,
      name: "Neha",
       age: 22, 
       course: "B.Com", 
       grade: "A" 
      },
    { id: 5, 
      name: "Rohan", 
      age: 20, 
      course: "BBA", 
      grade: "B" 
    },
  ];

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          grade={student.grade}
        />
      ))}
    </div>
  );
}

export default App;