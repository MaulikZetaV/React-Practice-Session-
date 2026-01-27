import React from 'react'
import UserItem from './UserItem'

function UserList({ users, setSelectedUser }) {
  return (
    <div>
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          setSelectedUser={setSelectedUser}
        />
      ))}
    </div>
  )
}

export default UserList
