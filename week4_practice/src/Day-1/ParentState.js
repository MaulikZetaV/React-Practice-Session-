import React from 'react'
import { useState} from 'react'
import State from './State';

function ParentState() {
const[inactive,setInActive] = useState(false);
  return (
    <div>
        <h4>Task 2: Update Parent State from Child</h4>
        <State
        inactive={inactive}
        setInActive={setInActive}
        />

        <p>Status:{inactive?"Active":"Yet to Check IN"}</p>

    </div>
  )
}

export default ParentState;

