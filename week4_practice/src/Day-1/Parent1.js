import React from 'react'
import Child from './Child'

function Parent1() {
const message = "Hello From Parent";
  return (
    <div>
        <h4>Task 1:Pass Data to Child</h4>
        <Child
        message={message}
        />
    </div>
  )
}

export default Parent1;