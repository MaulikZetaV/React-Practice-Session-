import React, { useState, useEffect,} from "react";

function ConditionalUpdate() {
  const [count, setCount] = useState(0);
  

useEffect(() => {
  if (count > 5) {
    console.log("Count crossed 5.");
  }
}, [count]);

  return (
    <div>
      <h4>10.Conditional Updation </h4>
      <p>Counter : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ConditionalUpdate;
