import React from 'react';
import AssignmentForm from './submitAssignmentForm';
import '../../css/submitAssignmentPage.css'; 


function SubmitAssignmentPage() {
  // Dummy assignment data for testing
  const assignmentData = {
    title: 'Sample Assignment',
    deadline: '2023-09-10T18:00',
    attachment: null,
  };

  const handleSubmit = (data) => {
    // Handle submission logic here
    console.log('Submitted Assignment:', data);
  };

  return (
    <div className="submit-assignment-container">
      <h1>Submit Assignment</h1>
      <AssignmentForm
        assignmentData={assignmentData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default SubmitAssignmentPage;
