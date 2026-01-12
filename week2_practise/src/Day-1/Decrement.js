import { useState } from "react";

function Decrement(){
const [count,setCount] = useState(100);
return(
    <>
    <h4>Task-2</h4>
    <h4>Decrement App</h4>
    <p>{count}</p>
    <button onClick={()=>setCount(count-1)}>
        Click me to decrease value above by 1
    </button>
    <br/>
    
    </>
    
    );
}

export default Decrement;