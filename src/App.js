import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoText = useRef();
  const addTodo = (event) => {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
  };
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input ref={todoText}></input>
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;
