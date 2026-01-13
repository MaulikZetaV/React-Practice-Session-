import { useState } from "react";

function DisableButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <h4>4.Disable Button Using Event Logic</h4>

      <button
        onClick={handleClick}
        disabled={isClicked}
      >
        {isClicked ? "Already Clicked" : "Click Me"}
      </button>
    </div>
  );
}

export default DisableButton;
