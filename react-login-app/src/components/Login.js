// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import HomeAdmin from './HomeAdmin';
import HomeStudent from './HomeStudent';


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  let name = "25252";

  const obj = {
    abc: "xyz"
  }

  const handleLogin = async () => {
    try {
      console.log('attempting login'); //comment later
      const response = await fetch('http://localhost:3005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log('login req sent');// comment later

      const data = await response.json();
      console.log('recieved response',data);//comment later
      const success = data.success;
      const userDetails = data.userDetails;
      
      if (success) {
        props.setUserDetails(userDetails);

        //redirect to respective page
        if(userDetails.role==='admin'){
          return <HomeAdmin/>;
        }
        else if (userDetails.role==='student'){
          return <HomeStudent/>
        }
      }
      setMessage(data.message);
    } catch (e) {
      console.error('error during login',e);
      
    }
  };

  return (
    <div className="container">
      <h1>MESS PORTAL</h1>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="ERP/ADMIN"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;