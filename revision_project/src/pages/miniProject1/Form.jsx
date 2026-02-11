import { useState } from "react";
import { isEmpty, isValidEmail } from "../../utils/validators";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(name) || !isValidEmail(email)) {
      setError("Please enter valid details");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "8px" }}
        />

        <button type="submit" style={{ marginLeft: "8px" }}>
          Submit
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submitted && !error && (
        <p>
          Welcome, {name} ({email})
        </p>
      )}
    </div>
  );
};

export default Form;
