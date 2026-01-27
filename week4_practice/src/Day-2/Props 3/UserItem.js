import React from 'react'

function UserItem({ user, setSelectedUser }) {
  return (
    <div>
      <p onClick={() => setSelectedUser(user.name)}>
        {user.name}
      </p>
    </div>
  )
}

export default UserItem
