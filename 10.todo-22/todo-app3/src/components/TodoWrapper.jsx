import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import { v4 } from "uuid";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  // delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // isCompleted
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <div className="todoWrapper">
      <h1>Todo !!</h1>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList
        toggleComplete={toggleComplete}
        todoList={todos}
        deleteTodo={deleteTodo}
      ></TodoList>
    </div>
  );
};

export default TodoWrapper;
