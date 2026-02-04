import { useNavigate } from "react-router-dom";

function Day3({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <h2>Day 3</h2>
      <h4>Welcome to Protected Dashboard</h4>
      <p>Learned Topics:-
        <li>Protected Routes</li>
        <li>Auth Logic</li>
        <li>Logout Functionality</li>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Day3;
