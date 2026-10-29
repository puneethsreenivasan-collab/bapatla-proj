import React from 'react'
import '../styles/login.css'
const Login = () => {
  return (
   <div className='login-container'>
      
        <h2>Login Form</h2>

        <form action="" className='login-from' >

        
            <div class="form-group">
                <label for="email">Email ID</label>
                <input type="email" id="email" name="email"/>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password"/>
            </div>


            <button type="submit">Register</button>

        </form>
    </div>
  )
}

export default Login
