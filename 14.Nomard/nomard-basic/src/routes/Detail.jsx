import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams("id");
  const movieDetail = async () => {
    const detail = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const detailJson = await detail.json();
  };

  useEffect(() => {
    movieDetail();
  }, []);

  return <h1>Detail</h1>;
};

export default Detail;
