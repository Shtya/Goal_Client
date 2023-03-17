import React, { useState } from 'react'
import H_SignUp from '../hook/H_SignUp'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [setname, setemail, setpassword, setpassword1, name, email, password
    , password1, handleSub] = H_SignUp()
  
  return (
    <>
    <div className="SignUp">
      <div>Register</div>
      <p>Create an account</p>
      <form >
        <input type="text" value={name}  onChange={e=> setname(e.target.value)} placeholder="Enter Your Name" />
        <input type="email" value={email}  onChange={e=> setemail(e.target.value)} placeholder="Enter Your email" />
        <input type="password" value={password}  onChange={e=> setpassword(e.target.value)} placeholder="Enter Your password" />
        <input type="password" value={password1}  onChange={e=> setpassword1(e.target.value)} placeholder="Enter Your confirm Password" />
        <button onClick={handleSub}>Submit</button>
      </form>
      </div>
      <ToastContainer />
      </>
  )
}

export default SignUp