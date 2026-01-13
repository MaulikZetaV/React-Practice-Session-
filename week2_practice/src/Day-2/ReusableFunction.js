import { useState } from "react";

function ReusableFunction() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);

  // Reusable function that accepts parameters
  const updateUser = (newName, newAge) => {
    setName(newName);
    setAge(newAge);
  };

  return (
    <div>
      <h4>Task-3</h4>
      <p>Pass Parameter to Function</p>

      <button onClick={() => updateUser("Maulik", 22)}>
        Set Name & Age
      </button>

      <br />

      <button onClick={() => updateUser("Guest", 0)}>
        Reset User
      </button>

      <br />

      <p>
        Name is <b>{name}</b>, Age is <b>{age}</b>
      </p>
    </div>
  );
}

export default ReusableFunction;
