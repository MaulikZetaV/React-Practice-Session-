import React from 'react'
import P2Compo from './P2Compo'
import dummydata1 from './dummydata1'

export default function Project2() {
  return (
    <>
        <h3><b>Product Catalog Panel</b></h3>
        {dummydata1.map((product)=>(
            <P2Compo
                key = {product.id}
                name ={product.name}
                brand={product.brand}
                price={product.price}
            />
        ))}
    </>
  )
}
