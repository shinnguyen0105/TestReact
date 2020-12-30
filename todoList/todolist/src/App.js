import React, { useState } from 'react';
import './App.css';
import AddTask from './addTask';
import TodoList from './list-task';
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Cong Nhat Nguyen',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Add your task',
      isCompleted: false,
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, isCompleted: false }]);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <div className='app'>
        <div className='todoform'>
          <AddTask addTodo={addTodo} />
          <TodoList todos={todos} markComplete={markComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;
