import React, { useState } from 'react';
import AssignmentForm from './AssignmentForm';
import '../css/createAssignment.css'; 

function CreateAssignmentPage() {
  const [assignmentData, setAssignmentData] = useState({
    title: '',
    details: '',
    attachment: null,
    deadline: '',
  });

  const handleAssignmentSubmit = (event) => {
    event.preventDefault();
    // handle assignment submission here

    console.log('Assignment Data:', assignmentData);
  };

  return (
    <div className="create-assignment-container">
      <h1>Create Assignment</h1>
      <AssignmentForm
        assignmentData={assignmentData}
        setAssignmentData={setAssignmentData}
        onSubmit={handleAssignmentSubmit}
      />
    </div>
  );
}

export default CreateAssignmentPage;
