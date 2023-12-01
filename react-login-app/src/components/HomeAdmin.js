import React from 'react';
import {Link} from 'react-router-dom'
import DeleteStudent from './DeleteStudent';
function HomeAdmin() {
  return (
    <div >
       <h1>Welcome Admin</h1>
        <Link to = "/delete">
       <button>Delete Student</button> 
      </Link>
       
    </div>
  )
}
export default HomeAdmin