import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    addStudent(name, course, age);

    alert("Student added successfully!");

    setName("");
    setCourse("");
    setAge("");

    navigate("/students");
  }

  return (
    <div>
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Course: </label>

          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Age: </label>

          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;