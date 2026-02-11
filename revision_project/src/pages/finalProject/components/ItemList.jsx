import { Link } from "react-router-dom";

const ItemList = ({ items, onDelete }) => {
  return (
    <ul className="item-list">
  {items.map((item) => (
    <li key={item.id} className="item-card">
      <span className="item-card-title">{item.title}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
  );
};

export default ItemList;
