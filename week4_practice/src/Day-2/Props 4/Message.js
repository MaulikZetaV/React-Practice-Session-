import React, { useState } from 'react'
import Viewer from './Viewer';
import Updater  from './Updater';

const Message = () => {
const[message,setMessage] = useState("");
  return (
    <div>
        <h4>Task 7:Two Children Sharing the Same State (Updating and Viewing)</h4>
        <Updater
        message={message}
        setMessage={setMessage}
        />

        <Viewer
        message={message}
        />
    </div>
  )
}

export default Message