import React, { useState } from 'react';

const AddTodoForm = () => {
    const [text, setText] = useState('');
    const handleSubmite = (e) => {
        e.preventDefault();
        if (text.trim()) {
            AddTodo(text);
            setText('');
        }
    };

  return (
    <form onClick={handleSubmite}>
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a new Todo '
        />
        <button type='submit'>Add Todo</button>
    </form>
  );    
};


export default AddTodoForm;
