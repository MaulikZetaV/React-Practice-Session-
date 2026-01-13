import React from 'react'

export default function P2Compo({name,role,isActive}) {
    const statusText = isActive ? "Active" : "Inactive";
  return (
    <>
    <p>
        <b>User Info and Status</b><br/>
        User Name: {name} <br />
        User Role: {role} <br />
        User Status: {statusText} <br /><br />

    </p>
    </>
  )
}
