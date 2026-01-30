import { useState } from "react";

function CrudApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (input === "") return;

    if (editId === null) {
      setItems([...items, { id: Date.now(), text: input }]);
    } else {
      setItems(
        items.map(item =>
          item.id === editId ? { ...item, text: input } : item
        )
      );
      setEditId(null);
    }

    setInput("");
  };

  const handleEdit = (item) => {
    setInput(item.text);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h3>MINI PROJECT:CRUD List App</h3>

      <input
        type="text"
        value={input}
        placeholder="Enter item"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAddOrUpdate}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
