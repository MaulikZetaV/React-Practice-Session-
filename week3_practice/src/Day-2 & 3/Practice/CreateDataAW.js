import React from 'react'
import { useState } from 'react'


function CreateDataAW() {
const[title,setTitle] = useState(" ");
const[body,setBody]=useState(" ");
const[post,setPost] = useState([]);

const createData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            title:title,
            body:body,
        }),
    });
    const data = await response.json();
    setPost(data);
    
}

  return (
    <div>
        <h4>Task 2:Create Data Using async/await</h4>
        <label htmlFor='Title'>Title</label>
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <br/>
        <label htmlFor='body'>Body</label>
        <textarea
        type="text"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        <br/>
        <button onClick={createData}>Create New Post</button>
        <br/>
        <p>Created post ID is {post.id}</p>
    </div>
  )
}

export default CreateDataAW;
