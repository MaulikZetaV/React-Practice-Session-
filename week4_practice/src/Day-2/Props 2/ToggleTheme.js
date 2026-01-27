import React, { useState } from 'react'
import Header from './Header';


function ToggleTheme() {
const[isDarkMode,setDarkMode] = useState(false);

  return (
    <div>
        <h4>Task 5:Boolean Toggle via Props Drilling</h4>
        <Header
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        />
        <p>Current Theme:{isDarkMode?"Dark":"Light"}</p>
        
        
        
        <p></p>
    </div>
  )
}

export default ToggleTheme