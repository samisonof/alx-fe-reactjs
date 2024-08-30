import React, {useState}  from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const[todos, setTodos] = useState([
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Build a Todo App', completed: false},
  ]);
  const addTodo = (text) =>{
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed } : todo
    ));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};


export default App;
