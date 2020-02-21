import React from 'react';
import ToDoItem from './components/ToDoItem';
import todosData from './todosData'
import './App.css'

function App() {
  const todoData = todosData.map(todo => <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} />)
  return (
    <div className="todo-list">
        { todoData }
    </div>
  );
}

export default App;
