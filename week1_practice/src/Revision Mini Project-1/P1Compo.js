import React from 'react'

function P1Compo({name,shift}) {
  return (
    <>
        <p>
            <b>Employee Details:-</b><br/>
            Name of Employee: {name}<br/>
            Shift of Employee: {shift}<br/><br/>
        </p>
    </>
  )
}

export default P1Compo;