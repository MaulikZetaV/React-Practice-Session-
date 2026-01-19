import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
    <h4>6.LifecycleLogic Understanding Example</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br/>
    </>
  );
}

export default Timer;
