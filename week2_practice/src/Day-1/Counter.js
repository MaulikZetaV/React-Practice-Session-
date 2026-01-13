import { useState } from "react";

function Counter(){
  const [count,setCount] = useState(0);
  return(
    <>
    <h4>Task-1</h4>
    <h4>Counter App</h4>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>
      Click me to increment the number above me.
    </button>
    <br/>
    </>

  );
}

export default Counter;