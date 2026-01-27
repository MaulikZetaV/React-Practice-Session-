import React from 'react'

function Card({title,description}) {
  return (
    <div>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
    </div>
  )
}

export default Card