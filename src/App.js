import React, { useState, useRef, useEffect } from "react";

import {
  Box,
  Button,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);
  const todoText = useRef();
  const addTodo = (event) => {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
    console.log(todoText.current.value);
    todoText.current.value = "";
  };
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  return (
    <div>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul> */}
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo} disablePadding>
              {/* <ListItemText primary="Inbox" /> */}
              <ListItemButton>
                <ListItemText primary={todo} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <form onSubmit={addTodo}>
          <div>
            {" "}
            {/* <input ref={todoText}></input> */}
            <Input placeholder="Enter To do" inputRef={todoText}></Input>
            {/* <input type="submit" value="Add Todo" /> */}
            <Button variant="outlined" onSubmit={addTodo}>
              Add Todo
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default App;
