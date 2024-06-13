import React from "react";

const Card = ({ id, title, imgSrc }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500/${imgSrc}`}
        alt="movie-img"
      />
      <h3 className="movie-title">{title}</h3>
    </div>
  );
};

export default Card;
