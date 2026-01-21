import React, { useEffect, useState } from 'react';

function UsersWithError() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();

  }, []);

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div>
      <h4>Task 3:Store Data in State + Handle Error (NO Loading Handling)</h4>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UsersWithError;
