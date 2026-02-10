import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api";

function Add() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newUser = await addUser({ name });

  navigate("/", {
    state: { newUser }
  });
};


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default Add;
