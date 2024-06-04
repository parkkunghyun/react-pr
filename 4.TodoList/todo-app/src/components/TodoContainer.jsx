import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";
import { useEffect } from "react";

const TodoContainer = () => {
  // todo list state
  const [todoList, setTodoList] = useState([]);
  // todo input
  const [input, setInput] = useState("");

  // hook
  useEffect(() => {
    // 할일 목록 추가
    fetch("http://192.168.30.119.8080/todos")
      .then((response) => response.json())
      .then((data) => setTodoList(data))
      .catch((err) => console.log(err));

    // UnMount
    return () => {};
  }, []);

  const onSubmit = () => {
    // 이제 다 리스트를 받아와야함
    console.log("할일 추가");
    console.log("할일 - " + input);
    alert("test");

    const data = {
      name: input, //할일제목
      status: 0, // 완료여부 0 ,1
    };

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // 할일 등록 [POST]
    // - 새로 등록된 할일 데이터
    fetch("http://192.168.30.119:8080/todos", init)
      .then((response) => response.json())
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error));
  };

  // input 입력했을때
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <TodoHeader></TodoHeader>
      <TodoInput
        input={input}
        onChange={onChange}
        onSubmit={onSubmit}
      ></TodoInput>
      <TodoList todoList={todoList}></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  );
};

export default TodoContainer;
