import React from 'react'
import Card from './Card'

const ReusingCard = () => {
const users = [
  {
    id: 1,
    title: "Aarav Sharma",
    description: "Frontend Developer from India"
  },
  {
    id: 2,
    title: "Neha Verma",
    description: "Backend Developer from Bangalore"
  }
];

const products = [
  {
    id: 101,
    title: "Laptop",
    description: "High performance laptop for developers"
  },
  {
    id: 102,
    title: "Smartphone",
    description: "Latest Android smartphone"
  }
];

  return (
    <div>
        <h4>Task 2: Reusing Card to display static data</h4>
        <h5>Users</h5>
      {users.map(user => (
        <Card
          key={user.id}
          title={user.title}
          description={user.description}
          
        />
      ))}
        <br/>
      <h5>Products</h5>
      {products.map(product => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  )
}

export default ReusingCard;