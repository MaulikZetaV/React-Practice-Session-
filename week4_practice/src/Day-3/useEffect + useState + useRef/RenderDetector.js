import React, { useEffect, useRef, useState } from "react";

function RenderDetector() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log("First render");
      isFirstRender.current = false;
    } else {
      console.log("Component updated");
    }
  }, [count]);

  return (
    <div>
        <h4>Task 2: First Render Detector</h4>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default RenderDetector;
