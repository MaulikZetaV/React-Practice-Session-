import { useState } from "react";
import CrudForm from "./components/CrudForm";
import CrudList from "./components/CrudList";
import {
  addItem,
  deleteItem,
  updateItem,
} from "./services/crudService";

const MiniProject4 = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <h2>Mini Project 4</h2>
          <p>Clean architecture with service abstraction</p>
        </div>

        <CrudForm onAdd={(text) => setItems(addItem(items, text))} />

        <CrudList
          items={items}
          onDelete={(id) => setItems(deleteItem(items, id))}
          onUpdate={(id) => setItems(updateItem(items, id))}
        />
      </div>
    </div>
  );
};

export default MiniProject4;
