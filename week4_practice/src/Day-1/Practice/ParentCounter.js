import React from 'react'
import { useState } from 'react'
import Counter from './CounterA';
import CounterB from './CounterB';

function ParentCounter() {
const[count,setCount] = useState(0);
  return (
    <div>
        <h4>Task 2: Counter with two different Child Buttons </h4>
        <p>Counter Value: {count}</p>

        <Counter
        count ={count}
        setCount={setCount}
        />

        <CounterB
        count={count}
        setCount={setCount}
        />

    </div>
  )
}

export default ParentCounter;
