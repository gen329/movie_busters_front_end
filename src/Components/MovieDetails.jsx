import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Reviews from "./Reviews";

const API = import.meta.env.VITE_API_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  
  const handleDelete = () => {
    deletedMovie()
  }

  const deleteMovie = () => {
    const httpOptions = { method: "DELETE"}
    fetch(`${API}/movies/${id}`, httpOptions)
    .then(() => navigate(`/movies`))
    .catch(error => console.log(error))
  }

  return (
    <article className='movie-details'>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Year of Release: {movie.year_of_release}</p>
      <p>Genres: {movie.genres}</p>
      <p>Rating: {movie.rating}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <div className='showNavigation'>
        <div>
          <Link to={`/movies`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/movies/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <Reviews />
      </div>
    </article>
  );
}

export default MovieDetails;
