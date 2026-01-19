import React from 'react'
import { useEffect } from 'react'


function BasicUseEffect() {
useEffect(()=>{
    console.log("Component Loaded");
},[])

  return (
    <div>
        <h4>Task 1:Console Log on Component Load</h4>
        <p>
            Hey,Myself Maulik Thakur, learning React JS.
        </p>
        
    </div>
  )
}


export default BasicUseEffect;
