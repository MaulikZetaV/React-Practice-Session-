import React from "react";
import { useState } from "react";

function UpperConverter() {
  const [text, setText] = useState("");

  const handler = (e) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <div>
      <h3>2.UpperCase Text Converter</h3>
      <label htmlFor="text">Enter any text :</label>
      <input type="text" value={text} onChange={handler} />
      <p>
        Upper Case Converted input :- <br />
        {text.toUpperCase()}
      </p>
      <br/>
    </div>
  );
}

export default UpperConverter;
