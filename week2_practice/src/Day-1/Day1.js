import React from 'react'
import Counter from './Counter'
import Decrement from './Decrement'
import Reset from './Reset'
import TaskCompilation from './TaskCompilation'
import DynamicGreet from './Practice/DynamicGreet'
import LightSwitch from './Practice/LightSwitch'
import NameInput from './Practice/NameInput'
import MultiState from './Practice/MultipleState'
import ConditionalCounter from './Practice/ConditonalCounter'
import Toggling from './Practice/Toggling'
import ToDo from './Practice/ToDo'

export default function DayOne() {
  return (
    <div>
      <h3>Day-1 of React Learning</h3>
      <br/>
      <Counter/>
      <br />
      <Decrement/>
      <br/>
      <Reset/>
      <br/>
      <TaskCompilation/>
      <br/>
      <h3>Self-Practice Session of Day-1</h3>
      <br/>
      <DynamicGreet/>
      <br />
      <LightSwitch/>
      <br/>
      <NameInput/>
      <br/>
      <MultiState/>
      <br/>
      <ConditionalCounter/>
      <br/>
      <Toggling/>
      <br/>
      <ToDo/>
    </div>

    
  )
}
