import React, { useState, useEffect, useRef } from 'react';

function CompoUpdate() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log("Count updated by .");
  }, [count]);

  return (
    <div>
      <h4>9. Updating with state</h4>
      <p>Counter : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CompoUpdate;
