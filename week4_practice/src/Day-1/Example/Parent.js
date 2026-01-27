import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <>
      <h2>Parent Component</h2>
      <p>Message in Parent: {message}</p>

      <Child message={message} setMessage={setMessage} />
    </>
  );
}

export default Parent;
