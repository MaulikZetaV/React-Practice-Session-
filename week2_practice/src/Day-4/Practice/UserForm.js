import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [country, setCountry] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
 

  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!cpassword) newErrors.cpassword = "Confirm password is required";
    else if (password !== cpassword)
      newErrors.cpassword = "Passwords do not match";

    if (!country) newErrors.country = "Please select a country";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
    }
  };

const handleReset = () => {
  setName("");
  setEmail("");
  setPassword("");
  setCPassword("");
  setCountry("");
  setErrors({});
  setSuccess(false);
};


  return (
    <div>
      <h4>7.User Registration Form</h4>

      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        {errors.cpassword && <p style={{ color: "red" }}>{errors.cpassword}</p>}
        <br />
        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Nepal">Nepal</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
  Reset
</button>
      </form>
      <br />
      {success && <p style={{ color: "green" }}>Registration Successful</p>}
    </div>
  );
}

export default UserForm;
