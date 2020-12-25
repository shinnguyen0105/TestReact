import React, { useState } from 'react';

const AddTask = ({ addTodo }) => {
  const [value, setvalue] = useState('');

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setvalue('');
  };

  return (
    <div>
      <div className='title'>ToDo App </div>
      <form onSubmit={handleSubmit} className={'form'}>
        <input
          className='input-task'
          type='text'
          placeholder='Add a ToDo'
          value={value}
          onChange={handleChange}
        />
        <input className='btn-submit' type='submit' value='Add' />
      </form>
    </div>
  );
};

export default AddTask;
