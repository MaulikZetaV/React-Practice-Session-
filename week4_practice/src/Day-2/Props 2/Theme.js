import React from 'react'

function Theme({isDarkMode,setDarkMode}) {
  return (
    <div>
        <button onClick={()=>setDarkMode(prev=>!prev)}>
            Toggle Theme
        </button>
    </div>
  )
}

export default Theme