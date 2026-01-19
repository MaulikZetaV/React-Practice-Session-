import React from 'react'
import UseEffect from './Practice/UseEffect'
import EmptyDependancy from './Practice/LogOnce'
import DependencyControlled from './Practice/DependencyArray'
import MultiDependencies from './Practice/MultiDependencies'
import MissingDependency from './Practice/MissingDepedency'
import Timer from './Practice/LifecycleLogic'
import CompoMount from './Practice/CompoMount'
import CompoMount2 from './Practice/CompoMount2'
import CompoUpdate from './Practice/CompoUpdate'
import ConditionalUpdate from './Practice/ConditionalUpdate'

export default function Day1() {
  return (
    <div>
        <h3>Day-1 of React Learning</h3>
        <br/>

        <br/>

        <br/>

        <h3>Self-Practice Session of Day-1</h3>
        <br/>   
        <UseEffect/>
        <br/>
        <EmptyDependancy/>
        <br/>
        <DependencyControlled/>
        <br/>
        <MultiDependencies/>
        <br/>
        <MissingDependency/>
        <br/>
        <Timer/>
        <br/>
        <CompoMount/>
        <br/>
        <CompoMount2/>
        <br/>
        <CompoUpdate/>
        <br/>
        <ConditionalUpdate/>
        <br/>

        <br/>

        <br/>

        <br/>

        <br/>
    </div>
  )
}
