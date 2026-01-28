import React, { useEffect, useRef, useState } from "react";

function PreviousValueDisplay() {
  const [text, setText] = useState("");
  const prevText = useRef("");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <h4>3.Store Previous Value</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p>Current Value: {text}</p>
      <p>Previous Value: {prevText.current}</p>
    </div>
  );
}

export default PreviousValueDisplay;
