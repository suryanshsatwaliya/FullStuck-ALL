import StudentCard from "./components/StudentCard";

function App() {
  const students = [
    { id: 1, name: "Rahul Sharma", course: "B.Tech CSE", age: 20 },
    { id: 2, name: "Priya Singh", course: "BCA", age: 21 },
    { id: 3, name: "Aman Kumar", course: "B.Tech IT", age: 20 },
    { id: 4, name: "Neha Verma", course: "MCA", age: 22 }
  ];

  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px",
      background: "#f5f5f5"
    }}>
      <h1>Student Records</h1>

      {students.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default App;