import { useState } from "react";

function TaskCompilation(){
  const [count,setCount] = useState(0);
  return(
    <>
    <h4>Task-1,2,3</h4>
    <h4>Increment, Decrement and Reset App</h4>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>
      Click me to increment the number above me.
    </button>
    <br/>
    <button onClick={()=>setCount(count-1)}>
        Click me to decrease value above by 1
    </button>
    <br/>
    <button onClick={()=>setCount(0)}>
        Reset Everything
    </button>
    <br/>
    </>

  );
}

export default TaskCompilation;