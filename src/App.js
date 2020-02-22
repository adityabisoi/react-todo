import React from 'react';
import ToDoItem from './components/ToDoItem';
import todosData from './todosData'
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        todo : todosData
    }
  }
  render(){
    const todoData = this.state.todo.map(todo => <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} />)
    return(
      <div className="todo-list">
         { todoData }
      </div>
    );
  }
}

export default App;
