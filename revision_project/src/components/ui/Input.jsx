const Input = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #cbd5f5",
        marginRight: "8px"
      }}
    />
  );
};

export default Input;
