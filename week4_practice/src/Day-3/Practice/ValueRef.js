import React, { useRef } from 'react'

function ValueRef() {
    const storeCountRef = useRef(0);

    const handleVisit = () =>{
        storeCountRef.current = storeCountRef.current +1;
        console.log(storeCountRef.current);
    }

    const handleShow = () => {
        alert(storeCountRef.current);
    }

  return (
    <div>
        <h4>Task 6: Understanding Value Ref(Invisible Memory)</h4>
        <button onClick={handleVisit}>Add Visit</button>
        <button onClick={handleShow}>Show Visit</button>
    </div>
  )
}

export default ValueRef