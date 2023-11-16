import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [posterUrl, setPosterUrl] = useState('');
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        if (responseData.Poster && responseData.Poster !== 'N/A') {
          setPosterUrl(responseData.Poster);
        } else {
          setPosterUrl('');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to fetch data. Please try again.');
      }
    };

    fetchPoster();
  }, [movie.title]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {posterUrl && <img src={posterUrl} alt="Movie Poster" />}
      <div>
        <h1>{movie.title}</h1>
        <h2>{movie.year_of_release}</h2>
        <br />
        <button className='detail-button'>
          <Link to={`/movies/${movie.id}`}>Details</Link>
        </button>
        <br />
      </div>
    </div>
  );
}

export default Movie;
