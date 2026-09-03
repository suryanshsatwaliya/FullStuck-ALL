import React from 'react';

function StudentCard({ name, age, course, grade }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Grade: {grade}</p>
      <hr />
    </div>
  );
}

export default StudentCard;