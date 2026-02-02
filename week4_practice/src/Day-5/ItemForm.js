function ItemForm({ input, setInput, onSubmit, isEdit }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter item"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={onSubmit}>
        {isEdit ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default ItemForm;
