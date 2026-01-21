import React, { useEffect, useState } from 'react';

function UsersWithLoading() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUsers = async () => {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();

  }, []);

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  return (
    <div>
      <h4>Task 2:Store Data in State </h4>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UsersWithLoading;
