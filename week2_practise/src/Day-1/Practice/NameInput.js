import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>3.Name Input</h3>

      <label htmlFor="name">Name:- </label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <p>
        Welcome <b>{name}</b> to the System!
      </p>
    </div>
  );
}

export default NameInput;
