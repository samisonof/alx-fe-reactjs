import React, {useState} from "react";

const TodoList = () => {
    const[todos, setTodos] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Build a Todo App', completed: false},
    ]);
    const toggleTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !==id));

    }
  return (
    <ul>
        {todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
    
  );
};

export default TodoList
