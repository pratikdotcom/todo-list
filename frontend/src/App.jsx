import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos"); // Adjust URL as per your backend setup
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      <h1>Todo List</h1>
      <CreateTodo setTodos={setTodos} />
      <div className="todos-container">
        {todos.map(todo => (
          <Todos key={todo._id} title={todo.title} description={todo.description} completed={todo.completed} />
        ))}
      </div>
    </div>
  );
}

function Todos({ title, description, completed }) {
  return (
    <div className="todo">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
}

export default App;
