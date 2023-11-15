import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className='movie-details'>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Year of Release: {movie.year_of_release}</p>
      <p>Genres: {movie.genres}</p>
      <p>Rating: {movie.rating}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </div>
  );
}

export default MovieDetails;
