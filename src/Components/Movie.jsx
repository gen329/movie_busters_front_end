// import { Link } from 'react-router-dom';
// import MoviePoster from './MoviePoster';

// function Movie({ movie }) {
//   return (
//     <div className="movie-item">
//       <MoviePoster/>
//       <h2>{movie.title}</h2>
//       <p>Year of Release: {movie.year_of_release}</p>
//       <button className="detail-button">
//       <Link to={`/movies/${movie.id}`}>Details</Link>
//       </button>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

const Movie = ({ movie }) => {
  const [posterUrl, setPosterUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const apiKey = 'cb21b3b1'; 
        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&apikey=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        if (data.Poster && data.Poster !== 'N/A') {
          setPosterUrl(data.Poster);
        } else {
          setPosterUrl(''); 
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPoster();
  }, [movie.title]);

  return (
    <tr>
      <td>{movie.title}</td>
      <td>
        {error && <p>Error: {error}</p>}
        {posterUrl && <img src={posterUrl} alt="Movie Poster" />}
      </td>
    </tr>
  );
};

export default Movie;