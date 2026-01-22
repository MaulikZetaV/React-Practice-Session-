import React from 'react'
import { useState, useEffect } from 'react'

function UserCard() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const userCard = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Unable to fetch data");
        }

        const data = await res.json();
        setUsers(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    userCard();

  }, []);

  if (loading) {
    return <p>Data is fetching....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div>
      <h4>Task 4:Fetching User Cards from API</h4>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
