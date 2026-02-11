import Counter from "./Counter";
import Form from "./Form";
import "./MiniProject1.css";

const MiniProject1 = () => {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-header">
          <h2>Mini Project 1</h2>
          <p>State management and controlled form handling</p>
        </div>

        <Counter />
        <Form />
      </div>
    </div>
  );
};

export default MiniProject1;
