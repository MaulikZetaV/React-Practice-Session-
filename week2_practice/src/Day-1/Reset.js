import { useState } from "react";

function Reset(){
  const [count,setCount] = useState(0);
  return(
    <>
    <h4>Task-3</h4>
    <h4>Counter and Reset App</h4>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>
      Click me to increment the number above me.
    </button>
    <br/>
    <button onClick={()=>setCount(0)}>
        Reset Everything
    </button>
    <br/>
    </>

  );
}

export default Reset;