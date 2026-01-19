import React from 'react';
import { useState, useEffect } from 'react';


function TogglingMounting() {
const[buttonStatus,setButtonStatus] = useState(false);


useEffect(()=>{
  if(buttonStatus===true){
    console.log("Effect by show")
  }else if (buttonStatus===false){
    console.log("Effect by hide")
  }


},[buttonStatus]);


  return (
    <div>
      <h4>11.Toggling Component Mounting</h4>
      <button onClick={()=>setButtonStatus(prev=>!prev)}>{buttonStatus?"Hide":"Show"}</button>
    </div>
  )
}


export default TogglingMounting;
