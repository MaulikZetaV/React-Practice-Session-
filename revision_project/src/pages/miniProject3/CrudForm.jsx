import { useState } from "react";

const CrudForm = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: "8px" }}>
        Add
      </button>
    </form>
  );
};

export default CrudForm;
