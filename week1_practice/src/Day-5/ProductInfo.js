import React from 'react'

const ProductInfo = ({pname,brand,price}) => {
  return (
    <p>
       Brand Name:{brand}<br />
       Product Name:{pname}<br />
       Cost of Product:{price}
       <br/>
       <br/> 
    </p>
  )
}

export default ProductInfo