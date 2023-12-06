import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import DeleteStudent from './DeleteStudent';

function HomeAdmin() {
  const navigate = useNavigate();  
  const handleLogout=() =>{
    localStorage.clear();
    window.location.href='/';
  }
  return (
    <div class ="btn-group-vertical" role ="group" aria-label="Vertical button group">
       <h1>Welcome Admin</h1>
        <Link to = "/delete">
          
       <button type = "button" class="btn btn-primary" >Delete Student</button> 
    </Link>
    <Link to = "/viewStudentDetails">
       <button  type = "button" class="btn btn-primary">View Student Details</button>
       </Link>
       <button type = "button" class="btn btn-primary" onClick={handleLogout}>LogOut</button>
       
     
    </div>
  )
}
export default HomeAdmin