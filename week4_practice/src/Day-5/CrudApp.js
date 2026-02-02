import { useState } from "react";
import ItemForm from "./ItemForm";

function CrudApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
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
      <h3>MINI PROJECT:CRUD App</h3>

      <ItemForm
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        isEdit={editId !== null}
      />

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
