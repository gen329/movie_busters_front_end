// import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ movie }) {
  return (
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Year of Release: {movie.year_of_release}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      <p>Rating: {movie.rating}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <Link to={`/movies/${movie.id}`}>Details</Link>
    </div>
  );
}

export default Movie;


