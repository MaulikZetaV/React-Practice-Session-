import React from 'react'
import { useState } from 'react'

function ErrorDelete() {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const deletePost = async () => {
    try {
      setMessage("");
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Deletion failed");
      }

      setMessage("Post is deleted");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h4>Task 4: Error with Delete</h4>

      <button onClick={deletePost}>Delete Post</button>

      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ErrorDelete;
