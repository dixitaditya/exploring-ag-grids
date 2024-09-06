"use client";

// TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import TodoInput from "./TodoInput"
import { uniqueId } from 'lodash';

enum TodoStatus { 
  "COMPLETED"  = "COMPLETED",
  "INPROGRESS" = "IN-PROGRESS"
  }


export interface ITodo {
  id: number;
  text: string;
  status: TodoStatus;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedFilter, setelectedFilter] = useState<ITodo[]>([]);

  const addTodo = (val: string) => {
    const todoObject = {
        id: +uniqueId(),
        text: val,
        status: TodoStatus.INPROGRESS
      }
      console.log("todoObject",todoObject)
    setTodos(state=>[...state, todoObject])

  }
//   const 
  // Add more state variables as needed
  // Implement functions for adding, toggling, and filtering todos

  return (
    <div>
      <h1>Todo List {TodoStatus.INPROGRESS}</h1>
      {/* Implement input for adding new todos */}
      <TodoInput submitHandler={addTodo}/>
        <TodoFilter />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {/* Implement counter for remaining todos and clear completed button */}
    </div>
  );
};

export default TodoList;
