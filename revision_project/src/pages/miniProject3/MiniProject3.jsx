import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudList from "./CrudList";

const MiniProject3 = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, { id: Date.now(), text }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, text: item.text + " (updated)" }
          : item
      )
    );
  };

  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <h2>Mini Project 3</h2>
          <p>CRUD operations with reusable components</p>
        </div>

        <CrudForm onAdd={addItem} />
        <CrudList
          items={items}
          onDelete={deleteItem}
          onUpdate={updateItem}
        />
      </div>
    </div>
  );
};

export default MiniProject3;
