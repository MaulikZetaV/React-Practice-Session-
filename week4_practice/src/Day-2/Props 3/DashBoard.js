import React, { useState } from 'react'
import UserList from './UserList';

const DashBoard = () => {
const [selectedUser, setSelectedUser] = useState("");
const users = [
  {
    id: 1,
    name: "Aarav"
  },
  {
    id: 2,
    name: "Neha"
  },
  {
    id: 3,
    name: "Rohan"
  }
];

  return (
    <div>
        <h4>Task 6: User Selection via Props Drilling</h4>
        <p>Selected User:{selectedUser}</p>
    
        <UserList
        users={users}
        setSelectedUser={setSelectedUser}
        />    
    </div>
  )
}

export default DashBoard