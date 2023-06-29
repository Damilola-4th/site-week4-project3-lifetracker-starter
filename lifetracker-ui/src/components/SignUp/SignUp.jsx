import React from 'react'
import { useState } from 'react'
import SignUpUser from '../Api/SignUpUser/SignUpUser'
import SignUpEventFunctions from './SignUpEventFunctions'
import "./SignUp.css"

const SignUp = (props) => {
  const [signUpInfo, setSignUpInfo]  = useState({'firstname': null, 'lastname': null, 'email': null, 'userName':null ,'password': null, 'confirmPassword': null})
  const {PostSignUpInfo} = SignUpUser(signUpInfo)
  
  // const updateUserName = (event )=>{
  //   event.preventDefault()
  //   let UpdatedUserinput = {}
  //   UpdatedUserinput = {'firstName': event.target.value}
  //   setSignUpInfo(signUpInfo => ({
  //     ...signUpInfo,
  //     ...UpdatedUserinput
  //   }))

  // }
  

  const {updateUserFirstName, updateUserLastName,  updateUserEmail, updateUsername, updateUserPassword,updateUserComfirmPassword, signUpFormSubmission } = SignUpEventFunctions({setSignUpInfo, signUpInfo})
  console.log(signUpInfo)
  return (
    <div className='container'>

    <div className='content-left'>
        {/* <img src="https://media.istockphoto.com/id/1140193165/photo/slim-and-fit-woman-drinking-water-before-having-breakfast.jpg?s=612x612&w=0&k=20&c=_QgpYIvS6mFI18tGVJGGD5mKbJ9KHk5JBqAfHDIopKg=" alt="" /> */}
    </div>

    <div className='content-right'>

    <div className='form-div'>
      <h1>Create Account</h1>

      <form className='signup-form' onSubmit= {(event) => signUpFormSubmission(event, PostSignUpInfo , signUpInfo) }>
      
      <span className='inline'>
      <label> First Name: </label> 
      <input type="text" onChange={ (event) => updateUserFirstName(event) }  />

      <label> Last Name: </label>
      <input type="text" onChange = { (event) => updateUserLastName(event) } />
      
      </span>
      
      <br/>
      
      <label> Email: </label> <br/>
      <input type="email" onChange = { (event) => updateUserEmail(event) }/>
    
      <br />
      
      <label> Username: </label> <br/>
      <input type="text" onChange={ updateUsername }/>

      <br/>

      <label> Password: </label> <br/>
      <input type="password" onChange = { updateUserPassword } />

      <br/>

      <label> Confirm Password: </label> <br/>
      <input type="password" onChange={ updateUserComfirmPassword} />

      <br/>

      <button type="submit">Create Account</button>
      </form>
    </div>
    </div>
  </div>
  )
}

export default SignUp
