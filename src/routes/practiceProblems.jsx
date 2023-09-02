import React, { useState } from 'react';
import '../css/assignments.css';
import { useLoaderData } from "react-router-dom";
// import CourseNavBar from '../components/courseNavBar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



export default function PracticeProblems() {
  const [practiceProblems, setPracticeProblems] = useState([
    {
      id: 1,
      title: 'Problem 1',
      difficulty: 1000,
    },
    {
      id: 2,
      title: 'Problem 2',
      difficulty: 600,
    },
    {
      id: 3,
      title: 'Problem 3',
      difficulty: 700,
    },
    {
      id: 4,
      title: 'Problem 4',
      difficulty: 100,
    },
    {
      id: 5,
      title: 'Problem 5',
      difficulty: 800,
    },
    // Add more assignments here...
  ]);

  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order
  // const { course, semester } = useLoaderData();

  const handleSortByDifficuty = () => {
    const sortedPracticeProblems = [...practiceProblems].sort((a, b) =>
      sortOrder === 'asc'
        ? a.difficulty.localeCompare(b.difficulty)
        : b.difficultyf.localeCompare(a.difficulty)
    );
    setPracticeProblems(sortedPracticeProblems);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
        <div className="available-assignments-container">
        <h1 >Practice Problems</h1>
        <button onClick={handleSortByDifficuty}>
            Sort by Difficulty ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
        </button>
        <PracticeProblemList practiceProblems={practiceProblems} />
        </div>
    </>
    
  );
}

const PracticeProblemList = ({ practiceProblems }) => {
  return (
    <ul className="assignment-list">
      {practiceProblems.map((practiceProblem) => (
        <li key={practiceProblem.id} className="assignment-item">
          <h3>{practiceProblem.title}</h3>
          <p>Difficulty: {practiceProblem.difficulty}</p>
          <Link to={`/assignments/${practiceProblem.id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}







