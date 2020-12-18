import React from 'react';

const TodoList = (todos) => {
    return (
        <div className="todo-list">
            {
                todos.todos.map((todo) => (
                    <div className="todo">
                        <p>
                            {todo.text}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}
export default TodoList;