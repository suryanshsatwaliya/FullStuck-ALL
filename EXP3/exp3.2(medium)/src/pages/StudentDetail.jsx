import { useParams } from "react-router-dom";

function StudentDetail({ students }) {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h1>Student not found</h1>;
  }

  return (
    <div>
      <h1>Student Profile</h1>

      <h2>{student.name}</h2>

      <p>ID: {student.id}</p>
      <p>Course: {student.course}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}

export default StudentDetail;