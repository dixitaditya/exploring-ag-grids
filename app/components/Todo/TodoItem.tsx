"use client"

// TodoItem.tsx
import React from 'react';
import {ITodo} from "./TodoList"


interface TodoItemProps {
  todo: ITodo;
  // Add more props as needed
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <li><span>{todo.text}</span></li>;
};

export default TodoItem;
