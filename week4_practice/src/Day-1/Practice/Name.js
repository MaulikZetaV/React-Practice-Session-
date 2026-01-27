import React from 'react'

const Name = ({name,setName}) => {
  return (
    <div>
        <p>Name Input Field:-</p>
        <label htmlFor='name'>Name:</label>
        <input
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter your name'
        />

    </div>
  )
}

export default Name;