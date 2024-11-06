import React from 'react';
import studentsData from './students.json'; // Import the students data
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Student Directory</h1>
      <div className="students-container">
        {/* Fix: Map over the students array and display each student's details */}
      </div>
    </div>
  );
};

export default App;
