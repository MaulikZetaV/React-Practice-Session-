import { useState } from "react";

function SameHandler() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  // ONE handler for both events
  const bothHandler = (e) => {
    if (e.type === "change") {
      setName(e.target.value);
    }

    if (e.type === "click") {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h4>3.Same Handler for Different Events</h4>

      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={bothHandler}
      />
        <p>Input Value: {name}</p>
      <br />

      <button onClick={bothHandler}>
        Increment
      </button>

      
      <p>Button Count: {counter}</p>
      <br />
    </div>
  );
}

export default SameHandler;
