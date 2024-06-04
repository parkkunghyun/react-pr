import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, deleteTodo, toggleComplete }) => {
  return (
    <div className="todoList">
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          toggleComplete={toggleComplete}
          todo={todo}
          deleteTodo={deleteTodo}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
