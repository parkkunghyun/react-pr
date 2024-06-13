import React, { useEffect, useState } from "react";
import Card from "./Card";
import { dummy } from "../MovieDummy";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const movieList = async () => {
    const mL = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=73c6f0aace5c27ab0aa059e980d861ac&language=ko&Region=KR`
    );
    const json = await mL.json();
    setMovies(JSON.stringify(json));
    setLoading(false);
  };

  useEffect(() => {
    movieList();
  }, []);
  console.log(movieList);

  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {dummy.results.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.original_title}
              imgSrc={item.backdrop_path}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
