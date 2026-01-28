import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // focus the input using useRef
    inputRef.current.focus();
  };

  return (
    <div>
        <h4>Understanding Example for useRef hook</h4>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
