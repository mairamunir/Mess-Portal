
//src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
//import Home from './components/Home';
import DeleteStudent from './components/DeleteStudent';
import HomeAdmin from './components/HomeAdmin';
import HomeStudent from './components/HomeStudent';
import "./App.css"

function App() {
    const [userDetails, setUserDetails] = useState(null);
     const isAdmin =userDetails && userDetails.role==='admin';
  
      return (
        <div className="App">
              {userDetails === null
                 ? <Login setUserDetails={setUserDetails} />
                 :isAdmin
                   ? <DeleteStudent/>
                 : <HomeAdmin userDetails={userDetails}/>}
             </div>
        
    );
  }

export default App;




//cd react-login-app
//cd src
// npm start



{/* <Router>
        <div className="App">
        {userDetails === null ? ( 
        <Login setUserDetails={setUserDetails} />
        ) :userDetails.role ==='admin' ? (
        <HomeAdmin/>
        ) :userDetails.role ==='student' ?(
        <HomeStudent/>
        ) : null }
        </div>
        </Router> */}