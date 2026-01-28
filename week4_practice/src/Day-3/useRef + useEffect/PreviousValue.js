import React, { useEffect, useRef, useState } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  console.log("Previous Count:", prevCountRef.current);
  console.log("Current Count:", count);

  return (
    <div>
      <h4>Task 2: Previous Value Logger</h4>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default PreviousValue;
