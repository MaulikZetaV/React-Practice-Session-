import React from 'react'
import { useEffect } from 'react'


function CompoMount() {
useEffect(()=>{
    console.log("Component Mounted");
},[]);

  return (
    <div>
        <h4>7.Mounting (Page Load Logger)</h4>
        <p>Welcome to Understanding of the LifecycleLogic</p>
    </div>
  )
}


export default CompoMount;
