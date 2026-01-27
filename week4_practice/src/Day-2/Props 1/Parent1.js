import React from 'react'
import { useState } from 'react'
import Child1 from './Child1';

function Parent1() {
const[count,setCount] = useState(0);
  return (
    <div>
        <h4>Props Drilling</h4>
        <h4>Task 4:Updating Parent State from GrandChild</h4>
        <p>Counter Value: <b>{count}</b>,Updation in Parent from GrandChild</p>
        <br/>
        <Child1
        count={count}
        setCount={setCount}
        />
    </div>
  )
}

export default Parent1;
