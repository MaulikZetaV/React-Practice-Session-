import React from 'react'
import { useState } from 'react'
import Toggling from './Toggling';

function ParentToggler() {
const[showMessage,setShowMessage] = useState(true);
  return (
    <div>
        <h4>Task 3:Toggle Message Visibility</h4>

        <Toggling
            showMessage={showMessage}
            setShowMessage={setShowMessage}
        />

        <p>Hello from {showMessage?"Parent":"Child"}</p>
    </div>
  )
}

export default ParentToggler;
