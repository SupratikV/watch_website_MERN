
// Import necessary libraries
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const history = useNavigate();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Add username state
  
    /*    const isEmailValid = () => {
      // Basic email validation using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    */
  
    const submit = async (e) => {
      e.preventDefault();
  
      // if (!isEmailValid()) {
      //   alert("Invalid email address");
      //   return;
      // }
  
      try {
        await axios.post("http://localhost:3000/signup", {
          username,
          email,
          password
           // Include username in the request payload
        })
          .then(res => {
            if (res.data === "exist") {
              alert("User already exists");
            } else if (res.data === "notexist") {
              history("/home"); // Pass username to Home
            }
          })
          .catch(e => {
            alert("wrong details");
            console.log(e);
          });
  
      } catch (e) {
        console.log(e);
      }
    };
  
    return (
      <div className="login">
  
        <h1>Create Account</h1>
  
        <form action="POST">
          <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" /> {/* Add username input field */}
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
          <input type="submit" onClick={submit} />
  
        </form>
  
        
        <p>Already have an account?<Link to="/">Sign In</Link></p>
        
  
        
  
      </div>
    );
  }
  
  export default Register;
  