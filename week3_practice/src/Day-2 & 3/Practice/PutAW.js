import React from 'react'
import { useState } from 'react'

function PutAW() {

  const [newtitle, setTitle] = useState("");
  const [response, setResponse] = useState({});

  const updateData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newtitle,
      }),
    });

    const data = await res.json();
    setResponse(data);
    console.log("Title is updated",data);
  };

  return (
    <div>
      <h4>Task 3 : Update Data Using async/await</h4>

      <label>Title</label>
      <input
        value={newtitle}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <button onClick={updateData}>Update New Title</button>

      <p>Existing post new title is {response.title}</p>
    </div>
  );
}

export default PutAW;
