import React from 'react'
import { useState } from 'react'


function DropDown () {
const[country,setCountry] = useState("");
  return (
    <div>
        <h4>3.Select Dropdown</h4>
        <form>
            <label htmlFor='dropdown'>Country :</label>
            <select
                value = {country}
                onChange={(e)=>setCountry(e.target.value)}
            >
                <option value = "">Select the country</option>
                <option value = "India">India</option>
                <option value = "USA">America</option>
                <option value = "Russia">Russia</option>
            </select>
        </form>
        <br/>
    </div>
  )
}


export default DropDown;