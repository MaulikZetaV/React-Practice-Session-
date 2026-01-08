import React from 'react'
import UserCard from './UserCard'

export default function Day4() {
  return (
    <div>
        <h2>Day-4 of React Learning</h2>
        <p>Creating a UserCard which can be resued</p>

        <UserCard id={1820} name="Maulik"age={22} role="Trainee" company="Zeta-V Technology" residence="Pune" city="Seoni" />
        <br></br>
        <UserCard id={1821} name="Sandy" age={23} role="Trainee " company="Zeta-V Technology" residence="Pune" city="Pune " />
        <br></br>
        <UserCard id={1822} name="Manav" age={21} role="Intern" company="Zeta-V Technology" residence="Pune" city="Pune" />
    </div>
  )
}
