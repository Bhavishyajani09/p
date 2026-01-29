import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { handleError, handleSuccess } from "../../utils";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  console.log(loginInfo);

  const handleLogin = async (e) => {
    e.preventDefault();
    const {  email, password } = loginInfo;
    if ( !email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:4000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      
      const result = await response.json();
      const {success , message , jwtToken,name, error} = result;
      if(success){
        handleSuccess(message);
      localStorage.setItem("token" , jwtToken)
      localStorage.setItem("loggedInUser" , name)
     
        setTimeout(() => {
        navigate('/home')
        }, 1000);
      } else if(error){
        const details = error.details[0].message;
        handleError(details);
      }
      else if(!success){
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err.message);
    }
  };


  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
       
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter your email..."
            value={loginInfo.email}
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password..."
            value={loginInfo.password}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
        <button type="submit">Login</button>
        <span>
            Don't have an account?
          <Link to="/signup"> Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Login;
