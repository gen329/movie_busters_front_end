import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Year of Release: {movie.year_of_release}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      <p>Rating: {movie.rating}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </div>
  );
}

export default MovieDetails;
