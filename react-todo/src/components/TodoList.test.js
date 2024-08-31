import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

    // Simulate a click event on the todo item using fireEvent
    fireEvent.click(todoItem);

    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  test('deletes a todo item', () => {
    const deleteTodo = jest.fn();
    const todos = [{ id: 1, text: 'Learn React', completed: false }];
    render(<TodoList todos={todos} toggleTodo={() => {}} deleteTodo={deleteTodo} />);

    const deleteButton = screen.getByText('Delete'); // Assuming your delete button contains the text 'Delete'

    // Simulate a click event on the delete button using fireEvent
    fireEvent.click(deleteButton);

    expect(deleteTodo).toHaveBeenCalledWith(1);
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
