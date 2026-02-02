import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/">Studied</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
