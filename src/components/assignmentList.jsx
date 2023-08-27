import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function AssignmentList({ assignments, course, semester }) {
  return (
    <ul className="assignment-list">
      {assignments.map((assignment) => (
        <li key={assignment.id} className="assignment-item">
          <h3>{assignment.title}</h3>
          <p>Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
          <Link to={`/semesters/${semester.id}/courses/${course.id}/assignments/${assignment.id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}

