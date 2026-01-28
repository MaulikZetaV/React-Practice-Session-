import React, { useEffect, useRef } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h4>1.Auto Focus Input</h4>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
}

export default AutoFocusInput;
