import { useState } from "react";

function RegistrationForm() { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
    }
  };


  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setErrors({});
    setSuccess(false);
  };

  return (
    <div>
      <h4>Practice Task of Day-4</h4><br/>
      <h4>User Registration Form</h4>

      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors({ ...errors, name: "" });
          }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <br/>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <br/>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <br />

        <button type="submit">Submit</button>
        <br/>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      
      {success && <p style={{ color: "green" }}>Registration Successful</p>}

      <br/>
      <h4>Stored Form Data (Live)</h4>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default RegistrationForm;
