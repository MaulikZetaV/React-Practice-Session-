import { useState } from "react";

function MultiState() {
  const [name, setName] = useState("Not Available");
  const [age, setAge] = useState(0);
  const [role, setRole] = useState("Guest");

  const handlingInput = () => {
    setName("Maulik");
    setAge(22);
    setRole("Developer");
  };

  return (
    <>
      <h3>4.Multiple State & Default State Initialization</h3>

      <button onClick={handlingInput}>Load Profile</button>

      <p>
        Profile:
        <br />
        Name: {name}
        <br />
        Age: {age}
        <br />
        Role: {role}
      </p>
    </>
  );
}

export default MultiState;
