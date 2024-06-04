import React from "react";

const TodoInput = ({ onSubmit, input, onChange }) => {
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일 입력"
          onChange={onChange}
          value={input}
          className="input"
        />
        <button className="btn" type="submit">
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
