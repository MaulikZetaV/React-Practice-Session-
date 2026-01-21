import React from 'react'
import { useState } from 'react'

function NewPostStoreResponse() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState(null);

  const handler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      })
    })
      .then(res => res.json())
      .then(data => {
        setPost(data);
      });
  };

  return (
    <div>
      <h4>Task 2 : Add a New Post and Store Response</h4>

      <label>Enter Post title:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <label>Enter text for body:</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        cols={50}
      />
      <br />

      <button onClick={handler}>Create Post</button>

      {post && (
        <div>
          <h5>Created Post</h5>
          <p><strong>ID:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
        </div>
      )}
    </div>
  );
}

export default NewPostStoreResponse;
