// import React from 'react'
// import '../styles/login.css'
// const Login = () => {

//     // useState ()

//     // function the get the get the data and set the token to the local storage

//   return (
//    <div className='login-container'>

//         <h2>Login Form</h2>

//         <form action="" className='login-from' >

//             <div class="form-group">
//                 <label for="email">Email ID</label>
//                 <input type="email" id="email" name="email" />
//             </div>

//             <div class="form-group">
//                 <label for="password">Password</label>
//                 <input type="password" id="password" name="password"/>
//             </div>

//             <button type="submit">Register</button>

//         </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

const Login = () => {
  // Separate states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validation function
  const validate = () => {
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 5) {
      setPasswordError("Password must contain at least 5 characters");
      isValid = false;
    }

    return isValid;
  };

  // Login function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const res = await axios.get("http://localhost:5000/users");

        const loginUser = res.data.find(
          (x) => x.Email === email && x.Password === password,
        );

        if (loginUser) {
          localStorage.setItem("user", JSON.stringify(loginUser));

          alert("Login Successful!");

          console.log(loginUser);
        } else {
          alert("Invalid Email or Password");
        }
      } catch (error) {
        console.log(error);
        alert("Server Error");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email ID</label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            placeholder="Enter Email"
          />

          <span className="error">{emailError}</span>
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            placeholder="Enter Password"
          />

          <span className="error">{passwordError}</span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
