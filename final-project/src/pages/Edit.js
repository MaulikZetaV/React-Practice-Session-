import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/api";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    if (!id) return;

    getUserById(id).then(data => {
      setName(data.name);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    try {
      await updateUser(id, { name });
      navigate("/");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    
    <form onSubmit={handleUpdate}>
      <h2>Edit User</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default Edit;
