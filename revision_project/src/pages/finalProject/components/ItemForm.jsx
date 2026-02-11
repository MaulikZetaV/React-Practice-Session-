import { useState } from "react";

const ItemForm = ({ initialValue = "", onSubmit }) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit({ title: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "8px" }}>
        Save
      </button>
    </form>
  );
};

export default ItemForm;
