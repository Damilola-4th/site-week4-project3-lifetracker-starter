import React from 'react'
import "./LogIn.css"
import {Link} from 'react-router-dom'
import LogInUser from '../Api/LogInUser/LogInUser'
import LogInEventFunctions from './LogInEventFunctions'
import { useState, useEffect } from "react";
const LogIn = ({Login,setLogin  }) => {
  // LogInCondition = props.Login
  const [LoginInfo, setLoginInfo] = useState({ 'email': null, 'password': null })
  const {PostCallToLogInUser} =   LogInUser({LoginInfo, setLogin,   setLoginInfo} )
  const { updateUserEmail, updateUserPassword, LogInFormSubmission} = LogInEventFunctions({LoginInfo, setLoginInfo})

  return (
    
   <div className='image-bg'>

  <div className='login-div'>
      <h1>Welcome Back!</h1>
      <p>Insert your login details below</p>
      <form className='login-form' onSubmit={ (event) => LogInFormSubmission(event, PostCallToLogInUser , LoginInfo )}> 
      {/* <label> Email </label> */}
      <input type="email" name="email" id="email" placeholder='Email' required onChange={ updateUserEmail}/>
      {/* <label> Password </label> */}
      <input type="password" name="password" id="password" placeholder='Password' required onChange={ updateUserPassword } />
      
      <button type="submit">LOG IN</button>
      
      </form>
      <p className='prompt'>New to us?      
      <Link  to={"/signUp"}> Create an Account </Link>
      </p>
  </div>
    
    </div>
  )
}

export default LogIn
