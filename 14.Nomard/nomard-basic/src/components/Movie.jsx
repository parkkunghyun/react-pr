import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, cover_image, title, summary, genres }) => {
  return (
    <div>
      <img src={cover_image} alt="" />
      <h2>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
