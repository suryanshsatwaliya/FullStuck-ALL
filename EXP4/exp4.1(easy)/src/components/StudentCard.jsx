function StudentCard({ student }) {
  return (
    <div style={{
      background: "white",
      padding: "15px",
      margin: "15px 0",
      borderRadius: "10px",
      boxShadow: "0 2px 8px #ccc"
    }}>
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
      <p>Course: {student.course}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}

export default StudentCard;