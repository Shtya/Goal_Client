import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import login from '../image/login.png'
const Header = () => {
  const [user, setuser] = useState("")
  const [show, setshow] = useState(false)
  const [flep, setflep] = useState("")

  useEffect(_ => {
    if (show === true) {
      setflep("fa-solid fa-caret-up")
    } else {
      setflep("fa-solid fa-caret-down")
    }
} ,[show])

  useEffect(_ => {
    if(localStorage.getItem("user") !== null) setuser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const handleOut = () => {
    localStorage.removeItem("user")
    setTimeout(() => {
      window.location.reload(false)
    }, 1000);
  }


  return (
    <div className='header'>
      <Link to ="/">GoalSetter </Link>
    <ul  className='dropdown' onClick={_=> setshow(!show)} >
          <img src={login} className="login-img" /><span> {user !== null ? user.name :null}</span>
          <i className={flep}></i>          {
            show && <ul>
            <Link to="/signup" >Register</Link>
            <Link to="/login" >SignUp</Link>
            <Link onClick={handleOut} >LogOut</Link>
          </ul>
          }
    </ul>
  </div>
  )
}

export default Header