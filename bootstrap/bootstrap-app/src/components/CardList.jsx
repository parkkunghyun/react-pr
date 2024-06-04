import React from "react";
import Card from "./Card";

const CardList = () => {
  const arr = [
    { title: "success", content: "222", color: "success" },
    { title: "primary", content: "333", color: "primary" },
    { title: "secondary", content: "444", color: "secondary" },
    { title: "warning", content: "555", color: "warning" },
    { title: "danger", content: "666", color: "danger" },
  ];
  return arr.map((item) => {
    return (
      <Card title={item.title} content={item.content} color={item.color}></Card>
    );
  });
};

export default CardList;
