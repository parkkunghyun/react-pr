import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul className="todoList">
      {todoList.map((todo) => (
        <TodoItem name={todo.name} no={todo.no} key={todo.no}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
