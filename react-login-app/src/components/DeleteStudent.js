import React from 'react'
import { useState } from 'react';
const DeleteStudent = () =>{
  const [username, setUsername] = useState("");

  const handleDelete = () =>{
    //delete user
    alert ("Delete");
    console.log('deleting student with erp: ${username}');
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