import React from 'react'
import { useState } from 'react'

function ErrorPost() {

  const [title, setTitle] = useState("");
  const [body, setTbody] = useState("");
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  const addPost = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          body: body,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to add title and post");
      }

      const data = await res.json();
      setPost(data);
      setError("");

    } catch (err) {
      setError(err.message);
      setPost(null);
    }
  };

  return (
    <div>
      <h4>Task 2: Error Handling in POST</h4>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <label>Body</label>
      <textarea
        value={body}
        onChange={(e) => setTbody(e.target.value)}
      />
      <br />

      <button onClick={addPost}>Add Post</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {post && !error && (
        <p style={{ color: "green" }}>
          Created Post ID is {post.id}
        </p>
      )}
    </div>
  );
}

export default ErrorPost;
