import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todoInput" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
