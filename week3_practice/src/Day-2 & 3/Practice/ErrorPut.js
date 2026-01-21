import React from 'react'
import { useState } from 'react'

function ErrorPut() {

  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const updatingTitle = async () => {
    try {
      setError(""); // reset error before new request

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: title }),
        }
      );

      if (!res.ok) {
        throw new Error("Update Failed");
      }

      const data = await res.json();
      setResponse(data);

    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <h4>Task 3:Error Handling in PUT</h4>

      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={updatingTitle}>Update Title</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {response && !error && (
        <p>Updated Title is {response.title}</p>
      )}
    </div>
  );
}

export default ErrorPut;
