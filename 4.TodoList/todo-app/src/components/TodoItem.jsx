import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todoItem">
      <div className="item">
        <input type="checkbox" id={props.no} />
        <label htmlFor={props.no}></label>
        <span>{props.todo}</span>
      </div>
      <div className="item">
        <button className="btn">삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
