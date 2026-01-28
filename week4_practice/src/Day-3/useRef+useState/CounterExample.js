import React, { useState, useRef } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);
  const clickRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);        // UI updates
    clickRef.current += 1;      // No re-render
  };

  return (
    <div>
        <h4>Understanding example of useRef+useEffect</h4>
      <h5>Count (useState): {count}</h5>
      <h5>Total Clicks (useRef): {clickRef.current}</h5>

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default CounterExample;
