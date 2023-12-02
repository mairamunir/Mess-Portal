import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const DeleteStudent = () =>{
  const [username, setUsername] = useState("");

  const handleDelete = async () =>{
    const confirmed = window.confirm('Are you sure you want to delete this student?');
    if (confirmed){
      try{ 
        await axios.delete(`http://localhost:3005/DeleteStudent/${username}`);
        alert('Student deleted successfully.');
        window.location.reload()
      }
      catch (error){
        console.error('Error deleting student');
      }
    }
  };
  return (
    <div>
      <h1>Delete Student</h1>
       <input type ="text" placeholder="enter student erp" value={username} onChange={(e)=> setUsername(e.target.value)}/>
      <button onClick={handleDelete}>Delete</button> 
    </div>
  );
};
export default DeleteStudent;