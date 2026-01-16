import React from "react";
import { useState } from "react";

function RadioButton() {
  const [gender, setGender] = useState("");
  return (
    <div>
      <h4>5.Gender Selection</h4>
      <form>
        <label htmlFor="radio">Select Gender:-</label>
        <br />
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        
        <label htmlFor="radio">Male</label>
        <br/>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="radio">Female</label>
        {gender!==""&&(
            <p>Selected Gender is {gender}</p>
        )}
      </form>
    </div>
  );
}

export default RadioButton;
