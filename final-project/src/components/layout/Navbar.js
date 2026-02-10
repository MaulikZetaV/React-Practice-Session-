import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Final Project React CRUD APP + API Call</h2>
      <Link to="/">Home</Link>
      <Link to="/add">Add User</Link>
    </nav>
  );
}

export default Navbar;
