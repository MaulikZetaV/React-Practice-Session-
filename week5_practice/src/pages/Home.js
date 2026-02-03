import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to Home Page of Week-5 React Learning</h2>
      <button onClick={() => navigate("/day-1")}>Day 1</button>
      <button onClick={() => navigate("/day-2")}>Day 2</button>
      <button onClick={() => navigate("/day-3")}>Day 3</button>
      <button onClick={() => navigate("/day-4")}>Day 4</button>
      <button onClick={() => navigate("/day-5")}>Day 5</button>
    </div>
  );
}

export default Home;
