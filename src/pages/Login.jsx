import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import H_Login from '../hook/H_login';
import Loading from '../util/Loading';

const Login = () => {
  const [ setemail , setpassword  ,password , email  , handleSub , animation] = H_Login()
  return (
    <>
    <div className="SignUp">
      <div>Login</div>
      <p>Create an account</p>
      <form >
        <input type="text" value={email} onChange={e=> setemail(e.target.value)} placeholder=" Your email" />
          <input type="text" value={password} onChange={e => setpassword(e.target.value)} placeholder=" Your password" />
          
          <button onClick={handleSub}>
            {animation === false ? <Loading />:"Submit"}
          </button>
        </form>
        <h3> <Link to="/signup">انشاء حساب جديد</Link> </h3>
      </div>
      <ToastContainer />
      </>
  )
}

export default Login