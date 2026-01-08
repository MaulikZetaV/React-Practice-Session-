import React from 'react'

export default function DayThree({name,role}) {
  return (
    <div>
      <h3>Profile:-</h3>
        <ul>
            <li>Name: {name}</li>
            <li>Role: {role}</li>
        </ul>
    </div>
  )
}
