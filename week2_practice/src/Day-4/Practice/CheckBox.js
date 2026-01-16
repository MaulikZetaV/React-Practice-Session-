import React from 'react'
import { useState } from 'react'


function CheckBox() {
const[isChecked,setIsChecked] = useState(false);
  return (
    <div>
        <h4>4.CheckBox toggle Practice</h4>
        <form>
            <label htmlFor='checkbox'>Click Checkbox:</label><br/>
            <input
             type='checkbox'
             checked = {isChecked}
             onChange={()=>setIsChecked(prev => !prev)}
             />
             <br/>
             <p>{isChecked?"Checked":"Unchecked"}</p>
        </form>
    </div>
  )
}


export default CheckBox ;