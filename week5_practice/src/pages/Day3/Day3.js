import { useNavigate } from "react-router-dom";

function Day3() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Day 3</h2>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

export default Day3;
