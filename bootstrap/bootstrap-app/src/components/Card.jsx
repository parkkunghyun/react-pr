import React from "react";
import "react-bootstrap";
import { Button } from "react-bootstrap";

const Card = (props) => {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Button variant={props.color}>{props.title}</Button>
    </div>
  );
};

export default Card;
