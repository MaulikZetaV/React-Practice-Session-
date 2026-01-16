import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (user.trim() !== "" && password.length >= 8) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
    setPassword("");
  };

  return (
    <div>
      <h4>Task-1,2 and 3 </h4>
      <p>Login / Logout UI, password hiding and conditional message</p>

      {!isLoggedIn && (
        <>
          <label>User: </label>
          <input
            type="text"
            value={user}
            onChange={handleUserChange}
          />

          <br />

          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <br />

          <button onClick={handleLogin}>Login</button>
        </>
      )}

      {isLoggedIn && (
        <>
          <p>Welcome User</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      {!isLoggedIn && <p>Please Login</p>}
      <br/>
    </div>
  );

}

export default Login;
