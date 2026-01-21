import React from 'react'
import { useState } from 'react'


function DeleteAW() {
const[message,setMessage] = useState("");

const deletePost = async ()=>{
   await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE",
    });
   
    setMessage("Post is deleted");

}
  return (
    <div>
        <h4>Task 4:Delete Data Using async/await</h4>
        <button onClick={deletePost}>Delete Post</button>
        <p>{message}</p>
    </div>
  )
}

export default DeleteAW;
