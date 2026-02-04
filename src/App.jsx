import { useState, useEffect } from 'react'
import './App.css'
import { Input } from './components/Input.jsx'
import { List } from './components/List.jsx'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [nextId, setNextId] = useState(() => {
    const savedNextId = localStorage.getItem('nextId');
    return savedNextId ? JSON.parse(savedNextId) : 1;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('nextId', JSON.stringify(nextId));
  }, [todos, nextId]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: nextId,
        text,
        completed: false,
      },
    ]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Input addTodo={addTodo} />
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
