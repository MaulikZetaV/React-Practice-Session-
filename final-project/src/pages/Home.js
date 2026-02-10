import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUsers, deleteUser } from "../services/api";
import Loader from "../components/common/Loader";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadUsers = async () => {
      const data = await getUsers();

      
      if (location.state?.newUser) {
        setUsers([location.state.newUser, ...data]);
      } else {
        setUsers(data);
      }

      setLoading(false);
    };

    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  if (loading) return <Loader />;

  return (
    <div>
      <h2>User List</h2>

      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <Link to={`/view/${user.id}`}>View</Link>
          <Link to={`/edit/${user.id}`}>Edit</Link>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
