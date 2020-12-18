import React, {useState} from 'react';
import './App.css';
import AddTask from './addTask';
import Todos from './list-task';
function App() {
  const [todos, setTodos] = useState([
        {
            text: "Cong Nhat Nguyen"
        },
        {
            text: "Add your task"
        }
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, {text:todo}] );
        console.log(todo);
    };
  return (
    <div className="App">
              <div className="app">
                  <div className="todoform">
                      <AddTask addTodo={addTodo} />
                      <Todos todos={todos} />
                  </div>
              </div>
    </div>
  );
}

export default App;
