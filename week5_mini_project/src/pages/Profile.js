import { useNavigate } from "react-router-dom";

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Profile (Protected)</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
