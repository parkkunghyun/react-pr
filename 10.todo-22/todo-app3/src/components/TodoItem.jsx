import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="todoItem">
      <div className="item">
        <p
          className={`${todo.completed ? "completed" : ""}`}
          onClick={() => {
            toggleComplete(todo.id);
          }}
        >
          {todo.task}
        </p>
      </div>
      <div className="font">
        <FontAwesomeIcon className="f1" icon={faPenToSquare}></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={() => deleteTodo(todo.id)}
          className="f2"
          icon={faTrash}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default TodoItem;
