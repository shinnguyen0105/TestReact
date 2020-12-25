import React, { useState } from 'react';
import './App.css';
import AddTask from './addTask';
import Todos from './list-task';
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
    console.log(todo);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const editTitle = (index, title) => {
    const newTodos = [...todos];
    newTodos[index].text = title;
    setTodos(newTodos);
  };
  return (
    <div className='App'>
      <div className='app'>
        <div className='todoform'>
          <AddTask addTodo={addTodo} />
          <Todos
            todos={todos}
            markComplete={markComplete}
            editTitle={editTitle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
