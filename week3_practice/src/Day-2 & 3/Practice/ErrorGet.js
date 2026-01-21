import React from 'react'
import { useState, useEffect } from 'react'

function ErrorGet() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [button, setButton] = useState(false);

  useEffect(() => {

    if (button === true) {

      const fetchdata = async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');

          if (!res.ok) {
            throw new Error("Unable to fetch names");
          }

          const data = await res.json();
          setUsers(data);

        } catch (err) {
          setError(err.message);
        }
      };

      fetchdata();
    }

  }, [button]);

  return (
    <div>
      <h4>Task 1: Error Handling in GET</h4>

      <button onClick={() => setButton(true)}>
        Load Names
      </button>

      {button && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ErrorGet;
