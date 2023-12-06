import React from 'react'
import axios from 'axios';
import { useState } from 'react';

import "./DeleteStudent.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DeleteStudent = () =>{
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(''); //new
  const navigate = useNavigate();

  const handleDelete = async () =>{
    try {
      const confirmed = window.confirm('Are you sure you want to delete this student?');
      if (confirmed) {
        const response = await axios.delete(`http://localhost:3005/DeleteStudent/${username}`);
        if (response.status === 200) {
          alert('Student deleted successfully.');
          window.location.reload();
        } else {
          throw new Error('Failed to delete student');
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Student not found');
      } else {
        setErrorMessage('Error deleting student');
        console.error('Error deleting student:', error);
      }
    }
    
  };
  return (
    <div class = "container">
      <h1>Delete Student</h1>
       <input type ="text" placeholder="enter student erp" value={username} onChange={(e)=> setUsername(e.target.value)}/>
      <button onClick={handleDelete}>Delete</button> 
      {errorMessage && <p>{errorMessage}</p>} 
      <button class="button back-button" onClick={() => navigate(-1)}>Back</button>
     
    </div>
  );
};

export default DeleteStudent;


