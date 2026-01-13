import { useState } from "react";

function ConditionalCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => {
      if (prevCount < 10) {
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  const decrement = () => {
    setCount(prevCount => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h4>5. Conditional Counter</h4>

      <p>{count}</p>

      <button onClick={increment}>
        Click me to increment the number above me.
      </button>
      <br />

      <button onClick={decrement}>
        Click me to decrease value above by 1
      </button>
      <br />

      <button onClick={reset}>
        Reset Everything
      </button>
      <br />
    </>
  );
}

export default ConditionalCounter;
