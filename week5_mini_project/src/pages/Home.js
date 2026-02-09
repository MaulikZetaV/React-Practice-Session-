import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>

      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Home;
