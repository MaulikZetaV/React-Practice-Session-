import React from 'react'
import { useState, useEffect } from 'react'

function LoadingMessage() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Unable to fetch user name");
        }

        const data = await res.json();
        setUsers(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetcher();
  }, []);

  return (
    <div>
      <h4>Task 5 : Showing Loading message till username are fetching and handling empty data</h4>

      {loading && <p>Have some patience, It's Loading...</p>}

      {!loading && error && (
        <p style={{ color: "red" }}>Error: {error}</p>
      )}

      {!loading && !error && users.length === 0 && (
        <p>No users found</p>
      )}

      {!loading && !error && users.length > 0 && (
        users.map(user => (
          <li key={user.id}>Name: {user.name}</li>
        ))
      )}
    </div>
  );
}

export default LoadingMessage;
