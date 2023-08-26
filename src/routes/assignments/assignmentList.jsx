import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function AssignmentList({ assignments }) {
  return (
    <ul className="assignment-list">
      {assignments.map((assignment) => (
        <li key={assignment.id} className="assignment-item">
          <h3>{assignment.title}</h3>
          <p>Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
          <Link to={`/assignments/${assignment.id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}

export default AssignmentList;

