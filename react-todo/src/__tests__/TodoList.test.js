// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders todo items', () => {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ];
  render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={() => {}} />);
  
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  const todos = [{ id: 1, text: 'Learn React', completed: false }];
  const toggleTodo = jest.fn();
  render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={() => {}} />);
  
  fireEvent.click(screen.getByText('Learn React'));
  expect(toggleTodo).toHaveBeenCalledWith(1);
});

test('deletes a todo', () => {
  const todos = [{ id: 1, text: 'Learn React', completed: false }];
  const deleteTodo = jest.fn();
  render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={deleteTodo} />);
  
  fireEvent.click(screen.getByText('Delete'));
  expect(deleteTodo).toHaveBeenCalledWith(1);
});
