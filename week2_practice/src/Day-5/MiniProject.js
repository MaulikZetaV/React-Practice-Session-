import React from "react";
import { useState } from "react";

function MiniProject() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errors, setErrors] = useState({});
 

  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username.trim()) {
      newErrors.name = "Username is required";
    } else if (username.length < 4) {
      newErrors.name = "Username must be at least 4 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!cpassword.trim()) {
      newErrors.cpassword = "Retype Password Required";
    } else if (cpassword !== password) {
      newErrors.cpassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoginStatus(true);
    }


  };

  const resetHandler = (e) => {
    setLoginStatus(false);
    setUserName("");
    setEmail("");
    setPassword("");
    setCPassword("");
    setErrors({});
    
  };
  return (
    <div>
      <h4>Task-1</h4><br/>
      <h4>Mini Project on Forms</h4>
        {loginStatus=== false && 
        (<form onSubmit={submitHandler}>
         
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
              setErrors({ ...errors, name: "" });
            }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <br />

          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            value={cpassword}
            onChange={(e) => {
              setCPassword(e.target.value);
              setErrors({ ...errors, cpassword: "" });
            }}
          />
          {errors.cpassword && (
            <p style={{ color: "red" }}>{errors.cpassword}</p>
          )}
          <br />

          <button type="submit">
            Submit
          </button>
          <br />
         
          </form>)}
           
          <p>{loginStatus ? "Welcome User" : "Please Login"}</p>
          {loginStatus === true && <button onClick={resetHandler}>Logout</button>}
          
  
    </div>
  );
}

export default MiniProject;
