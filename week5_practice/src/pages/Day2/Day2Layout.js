import { Link, Outlet,useNavigate } from "react-router-dom";

function Day2Layout() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Day 2</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <nav>
        <Link to="/day-2">Home</Link> |{" "}
        <Link to="users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Day2Layout;
