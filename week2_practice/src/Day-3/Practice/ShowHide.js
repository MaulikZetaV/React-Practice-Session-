import { useState } from "react";

function ShowHide() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h4>2.Show / Hide Text</h4>

      <textarea
        rows="4"
        cols="35"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <br />

      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      <br /><br />

      {isVisible && <p>{text}</p>}
    </div>
  );
}

export default ShowHide;
