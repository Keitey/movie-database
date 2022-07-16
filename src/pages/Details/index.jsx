import { useParams, Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

import { APIKey } from "../../config/key";
import { Container } from "./styles";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, poster_path, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imageUrl}${poster_path}`,
          release: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release">Relase date: {movie.release}</span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
