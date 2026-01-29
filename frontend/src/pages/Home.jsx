import React from 'react'
import { useEffect } from 'react'   
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const  navigate = useNavigate();
    const [loggedInUser , setLoggedInUser] = useState('')
    useEffect(() => { 
      setLoggedInUser(localStorage.getItem("loggedInUser")) 
     })
     const handleLogout = (e)=>{
        localStorage.removeItem("token")
        localStorage.removeItem("loggedInUser")
        handleSuccess("Logout Successful")
        setTimeout(() => {
            navigate('/login') 
        },1000);
     }
  return (
    <div>
      Home page
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
        <ToastContainer />
    </div>
  )
}

export default Home
