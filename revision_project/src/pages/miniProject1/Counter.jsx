import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter</h3>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span style={{ margin: "0 12px" }}>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
