import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [signupInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const copySignUpInfo = { ...signupInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
  };

  console.log(signupInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return alert("All fields are required");
    }
    try {
      const url = "http://localhost:4000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      
      const result = await response.json();
      const {success , message , error} = result;
      if(success){
        alert(message);
        setTimeout(() => {
        navigate('/login')
        }, 1000);
      } else if(error){
        const details = error.details[0].message;
        alert(details);
      }
      else if(!success){
        alert(message);
      }
      console.log(result);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            autoFocus
            placeholder="Enter your name... "
            value={signupInfo.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter your email..."
            value={signupInfo.email}
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password..."
            value={signupInfo.password}
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
        <button type="submit">Signup</button>
        <span>
          Already Have an account
          <Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
