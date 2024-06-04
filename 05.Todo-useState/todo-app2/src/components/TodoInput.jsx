import React from "react";

const TodoInput = (props) => {
  return (
    <div>
      <input onChange={props.onChange} type="text" placeholder="할 일 입력" />
      <button onClick={props.addTodo} className="btn" type="submit">
        추가
      </button>
    </div>
  );
};

export default TodoInput;
