import { Link } from "react-router-dom";

function Students({ students }) {
  return (
    <div>
      <h1>Student Directory</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>

          <p>Course: {student.course}</p>
          <p>Age: {student.age}</p>

          <Link to={`/students/${student.id}`}>
            View Profile
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;