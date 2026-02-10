import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/api";
import Loader from "../components/common/Loader";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  if (!user) return <Loader />;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default View;
