import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        React Revision
      </div>

      <div className="navbar__links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/mini-project-1">Mini Project 1</NavLink>
        <NavLink to="/mini-project-2">Mini Project 2</NavLink>
        <NavLink to="/mini-project-3">Mini Project 3</NavLink>
        <NavLink to="/mini-project-4">Mini Project 4</NavLink>
        <NavLink to="/final-project">Final Project</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
