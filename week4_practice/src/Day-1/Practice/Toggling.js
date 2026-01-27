import React from 'react'

const Toggling = ({showMessage,setShowMessage}) => {
  return (
    <div>
        <p>Toggling Button</p>
        <button onClick={()=>setShowMessage(prev=>!prev)}>Toggle Message</button>

    </div>
  )
}

export default Toggling