import React from 'react'
import { useState } from 'react'

function DeletePost() {

  const [message, setMessage] = useState("");

  const deleteHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Post deleted successfully");
        }
      });
  };

  return (
    <div>
      <h4>Task 5: Delete a Post</h4>

      <button onClick={deleteHandler}>
        Delete Post
      </button>

      <p>{message}</p>
    </div>
  );
}

export default DeletePost;
