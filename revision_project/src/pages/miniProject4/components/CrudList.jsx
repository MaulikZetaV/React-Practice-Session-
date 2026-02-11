const CrudList = ({ items, onDelete, onUpdate }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button
            onClick={() => onDelete(item.id)}
            style={{ marginLeft: "8px" }}
          >
            Delete
          </button>
          <button
            onClick={() => onUpdate(item.id)}
            style={{ marginLeft: "6px" }}
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CrudList;
