import { useState } from "react";

function PasswordValidator() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h4>4.Password Validation Message</h4>

      <label htmlFor="password-input">Password: </label>
      <input
        type="password"
        id="password-input"
        value={password}
        onChange={handlePasswordChange}
      />

      <br />

      {password.length > 0 && password.length < 8 && (
        <p>Password too short</p>
      )}

      {password.length >= 8 && (
        <p>Password is valid</p>
      )}
    </div>
  );
}

export default PasswordValidator;
