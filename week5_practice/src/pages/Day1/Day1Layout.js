import { Link, Outlet, useNavigate } from "react-router-dom";

function Day1Layout() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Day 1</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <nav>
        <Link to="/day-1">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="contact">Contact</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default Day1Layout;
