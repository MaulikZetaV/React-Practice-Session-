import { useState } from "react";

function Todo() {
  // State for input value
  const [task, setTask] = useState("");

  // State for todo list (array)
  const [todos, setTodos] = useState([]);

  // Handle add task
  const handleAdd = () => {
    if (task.trim() === "") return;

    // Immutable update using spread operator
    setTodos([...todos, task]);

    // Clear input after adding
    setTask("");
  };

  return (
    <div>
       <h3>7.Todo List(Example Not coded by me)</h3>

      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
