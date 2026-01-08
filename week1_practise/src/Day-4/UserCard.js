import React from 'react'

export default function UserCard({id,name,age,role,company,residence,city}) {
  return (
    <div>
        <h4><b>Profile Id : {id}</b></h4>
        <p><b>Name: {name}</b></p>
        <p>Age: {age}</p>
        <p>Designation: {role}</p>
        <p>Company: {company}</p>
        <p>Current Resident City: {residence}</p>
        <p>Home Town : {city}</p>
    </div>
  )
}
