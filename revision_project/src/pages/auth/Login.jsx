import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login(username, password)) {
      navigate("/final-project");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <h2>Login</h2>
          <p>Access Final Project</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: "12px" }}
          />

          <button type="submit" style={{ marginTop: "16px" }}>
            Login
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        <p style={{ marginTop: "16px", fontSize: "13px", color: "#475569" }}>
          Demo Credentials → <strong>admin / admin123</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
