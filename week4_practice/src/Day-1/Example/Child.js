function Child({ message, setMessage }) {
  return (
    <>
      <h3>Child Component</h3>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
}

export default Child;
