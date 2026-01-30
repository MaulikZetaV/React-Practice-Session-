import React, { useRef, useState } from "react";

function CountRenders() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current+=1;

  return (
    <div>
      <h4>2.Count Renders</h4>
      <p>Component rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count ({count})
      </button>
    </div>
  );
}

export default CountRenders;
