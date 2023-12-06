import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewDetailsAdmin = () => {
    const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3005/users');
      const studentUsers = response.data.filter((user) => user.role === 'student');
      setStudents(studentUsers);
    } catch (error) {
      console.error('Failed to fetch student details', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <h1>View Students Details</h1>
    <input
      type="text"
      placeholder="Search by username"
      value={searchTerm}
      onChange={handleSearch}
    />
    {filteredStudents.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.username}</td>
              <td>{student.role}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No matching students found.</p>
    )}
    <button className="button back-button" onClick={() => navigate(-1)}>Back</button>
  </div>
);
   
};

export default ViewDetailsAdmin;


