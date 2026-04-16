import React, { useReducer, useState } from "react";


const initialState = {
  todos: []
};


function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };

    case "DELETE":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    case "EDIT":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };

    default:
      return state;
  }
}
 function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  
  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editId) {
      dispatch({
        type: "EDIT",
        payload: { id: editId, text: input }
      });
      setEditId(null);
    } else {
      dispatch({
        type: "ADD",
        payload: input
      });
    }

    setInput("");
  };

  
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo App</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp