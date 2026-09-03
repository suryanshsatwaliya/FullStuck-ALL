function StudentList({ students }) {

  return (
    <div className="students">

      <h2>Student List</h2>

      {students.map((student) => (
        <div className="card" key={student.id}>
          <h3>{student.name}</h3>

          <p>Course : {student.course}</p>

          <p>Grade : {student.grade}</p>
        </div>
      ))}

    </div>
  );
}

export default StudentList;