import { useState } from "react";

function MiniProject2() {
  // Counter states
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const decrementHandler = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name field is required";
    } else if (name.trim().length < 4) {
      newErrors.name = "Name should have at least 4 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email field is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const resetHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    setErrors({});
    setIsSubmitted(false);
  };
  
  const isFormValid = name.trim().length >= 4 && email.trim() !== "" && password.length >= 6;

  return (
    <div>
      <h4>Mini Project: Counter + Form</h4>

      <h4>Part 1: Counter</h4>

      <button onClick={() => setShowCounter(true)}>Show Counter</button><br />

      {showCounter && (
        <>
           <br />
          <p>Counter: <b>{counter}</b></p> 
          <button onClick={() => setCounter(counter + 1)}>Increment</button><br />
          <button onClick={decrementHandler}>Decrement</button><br />
          <button onClick={() => setCounter(0)}>Reset</button><br />
          <br />
          <button onClick={() => setShowCounter(false)}>Hide Counter</button>
        </>
      )}

      <hr />

      <br />
      <h4>Part 2: Form</h4>

      <form onSubmit={submitHandler}>
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

        <br />

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

        <br />

        <label>Password:</label>
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

        <button type="submit" disabled={!isFormValid} >Submit</button>
        <button type="button" onClick={resetHandler}>
          Reset Form
        </button>
      </form>

      {isSubmitted && <p>Form Submitted Successfully</p>}
    </div>
  );
}

export default MiniProject2;
