import React, { useState, useEffect } from 'react';

const MoviePoster = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiKey = 'cb21b3b1'; 

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieData();
  }, []);

  let imageUrl = null;

  if (movieData && movieData.Poster && movieData.Poster !== 'N/A') {
    imageUrl = movieData.Poster;
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {imageUrl && <img src={imageUrl} alt="Movie Poster" />}
    </div>
  );
};

export default MoviePoster;
