import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/day-3");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>For accessing day 3 Content you had to login because it is protected.</p>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />

      <button onClick={handleLogin}>Login</button>
      <nav>
        <Link to="/">Go to Home</Link>
      </nav>
    </div>
  );
}

export default Login;
