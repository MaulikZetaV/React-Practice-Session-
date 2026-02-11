import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ItemList from "./components/ItemList";
import AddEdit from "./pages/AddEdit";
import Details from "./pages/Details";
import { fetchItems, deleteItem } from "./services/apiService";
import { logout } from "../../utils/auth";

const FinalProject = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems()
      .then(setItems)
      .catch(() => setError("Failed to load data"));
  }, []);

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="project-page">
      <div className="project-container project-container--large">

        {/* Header */}
        <div className="project-header">
          <div className="dashboard-header">
            <div>
              <h2>Final Project Dashboard</h2>
              <p>Protected CRUD + API Integration</p>
            </div>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="dashboard-nav">
          <Link to="">All Items</Link>
          <Link to="add">Add New</Link>
        </div>

        {/* Error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Nested Routes */}
        <Routes>
          <Route
            index
            element={
              <ItemList items={items} onDelete={handleDelete} />
            }
          />
          <Route path="add" element={<AddEdit />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>

      </div>
    </div>
  );
};

export default FinalProject;
