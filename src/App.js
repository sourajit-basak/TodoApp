import React, { useState, useRef, useEffect } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  Box,
  Button,
  Container,
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
    <Container maxWidth="sm">
      <div>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List>
            {todos.map((todo) => (
              <ListItem key={todo} disablePadding>
                {/* <ListItemText primary="Inbox" /> */}
                <ListItemButton>
                  <TaskAltIcon />
                  <ListItemText primary={todo} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <form onSubmit={addTodo}>
            <div>
              <Input placeholder="Enter To do" inputRef={todoText}></Input>
              <Button variant="outlined" onSubmit={addTodo}>
                Add Todo
              </Button>
            </div>
          </form>
        </Box>
      </div>
    </Container>
  );
}

export default App;
