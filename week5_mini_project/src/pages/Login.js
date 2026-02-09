import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake validation
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
      navigate("/profile");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
