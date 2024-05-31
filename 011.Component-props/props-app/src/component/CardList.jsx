import React from "react";
import Card from "./Card";

const CardList = () => {
  //
  const cardData = [
    { title: "card1", content: "content card1" },
    { title: "card2", content: "content card2" },
    { title: "card3", content: "content card3" },
    { title: "card4", content: "content card4" },
    { title: "card1", content: "content card1" },
    { title: "card2", content: "content card2" },
    { title: "card3", content: "content card3" },
    { title: "card4", content: "content card4" },
  ];
  return (
    <>
      <h1>Card List</h1>
      {cardData.map((card, index) => {
        return (
          <Card key={index} title={card.title} content={card.content}></Card>
        );
      })}
    </>
  );
};

export default CardList;
