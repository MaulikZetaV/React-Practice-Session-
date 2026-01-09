import React from 'react'

export default function P2Compo({name,brand,price}) {
  return (
    <>
        <p>
            <b>Product Details :-</b><br/>
            Name of the Product: {name} <br/>
            Manufacturing Brand: {brand} <br />
            Price of Product: ${price} <br /><br/>
        </p>
    </>
  )
}
