import React from "react";
import {Link} from "react-router-dom"
//import DeleteStudent from "./delete";

//    const isAdmin = props.userDetails.role === "admin";
//     const isStudent = props.userDetails.role ==="student";

const Home=(props)=>{
    const isAdmin = props.userDetails.role ==="admin";

    return (
        <div>
          <h1>Hello {props.userDetails.username}</h1>
          {isAdmin ? (
            <div>
              <h1>Welcome Admin</h1>
              <Link to="/delete">Delete a Student</Link>
              {/* The Link component will navigate to the /delete route */}
            </div>
          ) : (
            <h1>Welcome Student</h1>
          )}
        </div>
      );
    };
    
    export default Home;

// const Home = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.userDetails.username}</h1>
//             {props.userDetails.role === "student"
//                 ? <h1>Welcome student</h1>
//                 : <h1>Welcome admin</h1>
//             }
//         </div>
//     )
// }

// export default Home;