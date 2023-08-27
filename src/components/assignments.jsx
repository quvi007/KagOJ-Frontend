import React, { useState } from 'react';
import '../../css/assignments.css';
import AssignmentList from './assignmentList';


function Assignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Assignment 1',
      deadline: '2023-09-01T12:00',
    },
    {
      id: 2,
      title: 'Assignment 2',
      deadline: '2026-09-05T15:00',
    },
    {
      id: 3,
      title: 'Assignment 3',
      deadline: '2023-09-05T15:00',
    },
    {
      id: 4,
      title: 'Assignment 4',
      deadline: '2023-10-05T15:00',
    },
    {
      id: 5,
      title: 'Assignment 5',
      deadline: '2024-09-05T15:00',
    },
    // Add more assignments here...
  ]);

  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order

  const handleSortByDeadline = () => {
    const sortedAssignments = [...assignments].sort((a, b) =>
      sortOrder === 'asc'
        ? a.deadline.localeCompare(b.deadline)
        : b.deadline.localeCompare(a.deadline)
    );
    setAssignments(sortedAssignments);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="available-assignments-container">
      <h1>Upcoming Assignments</h1>
      <button onClick={handleSortByDeadline}>
        Sort by Deadline ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
      </button>
      <AssignmentList assignments={assignments} />
    </div>
  );
}






export default Assignments;
