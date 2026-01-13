import { useState } from "react";

function MultiHandler() {
  const [counter, setCounter] = useState(0);

  // Single reusable handler
  const handleAction = (action) => {
    if (action === "increment") {
      setCounter(prev => prev + 1);
    } 
    else if (action === "decrement") {
      setCounter(prev => prev - 1);
    } 
    else if (action === "reset") {
      setCounter(0);
    }
  };

  return (
    <div>
      <h3>Self Practice Session of Day-2</h3><br/>
      <h3>1.Multiple Buttons, Single Handler</h3>

      <p>Counter: {counter}</p>

      <button onClick={() => handleAction("increment")}>
        Increment
      </button>
      <br />

      <button onClick={() => handleAction("decrement")}>
        Decrement
      </button>
      <br />

      <button onClick={() => handleAction("reset")}>
        Reset
      </button>
      <br/>
    </div>
  );
}

export default MultiHandler;
