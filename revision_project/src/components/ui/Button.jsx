const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 14px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        cursor: "pointer",
        marginRight: "8px"
      }}
    >
      {children}
    </button>
  );
};

export default Button;
