import React from 'react'
import DayThree from './DayThree'

export default function Day3({name}) {
  return (
    <div>
        <h2>Day-3 Of React Learning</h2>
        <p>Hello {name}</p>

        <DayThree name = "Maulik" role = "Trainee"/>
        <br></br>
        <DayThree name = "Sandy" role = "Trainee"/>
        <br></br>
        <DayThree name = "Manav" role = "Intern"/>
    </div>
  )
}
