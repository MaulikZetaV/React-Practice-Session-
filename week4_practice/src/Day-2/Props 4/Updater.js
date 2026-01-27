import React from 'react'

const Updater = ({message,setMessage}) => {

  return (
    <div>
         <input
            type='text'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder='Enter your messsage'
        />

    </div>
  )
}

export default Updater