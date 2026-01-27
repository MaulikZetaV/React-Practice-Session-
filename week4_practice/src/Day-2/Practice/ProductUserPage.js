import React from 'react'
import Button from './Button'
import Loader from './Loader'

const ProductListPage = () => {
  return (
    <div>
        <h4>Task 1:Using components for button and displaying message.</h4>

        <p>User List</p>
        <Button text = "UserList" />
        <Loader text="User"/>
        
        <br/>

        <p>Product List </p>
       <Button text = "ProductList" />
       <Loader text = "Product"/>
    </div>
  )
}

export default ProductListPage