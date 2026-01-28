import React, { useRef, useState } from 'react'

function SessionActionTracker() {
    const [status, setStatus] = useState("Idle");

    const actionRef = useRef(0);

    const startHandler = () => {
        setStatus("Started");
        actionRef.current+=1;
        console.log(actionRef.current);
    }
    const pauseHandler = () => {
        setStatus("Paused");
        actionRef.current+=1;
        console.log(actionRef.current);
    }
    const resetHandler = () => {
       setStatus("Idle");
        actionRef.current+=1;
        console.log(actionRef.current);
    }

  return (
    <div>
        <h4>Task 3:Session Action Tracker (useState + useRef)</h4>
        <p>State Presentation: <b>{status}</b></p>
        <button onClick={startHandler}>Start</button>
        <button onClick={pauseHandler}>Pause</button>
        <button onClick={resetHandler}>Reset</button>

    </div>
  )
}

export default SessionActionTracker;