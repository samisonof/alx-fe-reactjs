import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

describe('TodoList Component', () => {
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
    const toggleTodo = jest.fn();
    const todos = [{ id: 1, text: 'Learn React', completed: false }];
    render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={() => {}} />);

    const todoItem = screen.getByText('Learn React');
    todoItem.click();
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  test('displays message when no todos are present', () => {
    render(<TodoList todos={[]} toggleTodo={() => {}} deleteTodo={() => {}} />);
    expect(screen.getByText('No todos available')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const todos = [{ id: 1, text: 'Learn React', completed: false }];
    const { asFragment } = render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
   
    
  });
});
