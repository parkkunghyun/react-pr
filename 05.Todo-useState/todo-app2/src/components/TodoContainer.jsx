import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";
import { useEffect } from "react";

const TodoContainer = () => {
  const todoList = [
    { no: 1, name: "할일1", status: 0 },
    { no: 2, name: "할일2", status: 1 },
    { no: 3, name: "할일3", status: 0 },
    { no: 4, name: "할일4444", status: 0 },
  ];

  const sampleList = [{ name: "aaa" }, { name: "bbb" }];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(sampleList);
  const [newTodo, setNewTodo] = useState({ name: "" });

  useEffect(() => setNewTodo({ name: input }), [input]);

  const addTodo = () => {
    //e.preventDefault()
    setTodo([...todo, newTodo]);
    setInput("");
    console.log(todo);
  };

  const onChange = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className="container">
      <TodoHeader></TodoHeader>
      <TodoInput onChange={onChange} addTodo={addTodo}></TodoInput>
      <TodoList todoList={todoList}></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  );
};

export default TodoContainer;
