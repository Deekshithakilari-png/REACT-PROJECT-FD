
import React from "react";

// Header Component
function Header() {
  return <h1>Student Marks Report</h1>;
}

// StudentList Component
function StudentList() {
  const students = [
    { roll: 101, name: "Madhu", marks: 85 },
    { roll: 102, name: "Rahul", marks: 32 },
    { roll: 103, name: "Priya", marks: 76 },
    { roll: 104, name: "Kiran", marks: 25 },
    { roll: 105, name: "Sneha", marks: 90 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <p key={student.roll}>
          Roll No: {student.roll} | Name: {student.name} |
          Marks: {student.marks} |
          {student.marks >= 40 ? "PASS" : "FAIL"}
        </p>
      ))}
    </div>
  );
}

// Footer Component
function Footer() {
  return <h3>Student Management System</h3>;
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
