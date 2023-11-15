import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Reviews from "./Reviews";

const API = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [posterUrl, setPosterUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API}/movies/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);

        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(data.title)}&apikey=${apiKey}`;
        const posterResponse = await fetch(apiUrl);

        if (!posterResponse.ok) {
          throw new Error('Failed to fetch poster');
        }
        const posterData = await posterResponse.json();

        if (posterData.Poster && posterData.Poster !== 'N/A') {
          setPosterUrl(posterData.Poster);
        } else {
          setPosterUrl('');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to fetch data. Please try again.');
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleDelete = () => {
    deleteMovie();
  }

  const deleteMovie = () => {
    const httpOptions = { method: "DELETE" }
    fetch(`${API}/movies/${id}`, httpOptions)
      .then(() => navigate(`/movies`))
      .catch(error => console.log(error))
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <article className='movie-details'>
      <div>
        {error && <p>Error: {error}</p>}
        {posterUrl && <img src={posterUrl} alt="Movie Poster" />}
      </div>
      <h2>{movie.title}</h2>
      <p>MOVIE INFO:<br />
      <br/>
      {movie.description}
      <br/> Year of Release: {movie.year_of_release}
      <br/> Genres: {movie.genres}
      <br/> Rating: {movie.rating}
      <br/> Runtime: {movie.runtime} minutes</p>
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
        <button onClick={handleDelete}>Delete</button>
        <Reviews />
      </div>
    </article>
  );
}

export default MovieDetails;
