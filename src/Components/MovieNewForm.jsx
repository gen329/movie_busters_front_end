import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL

function MovieNewForm() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    year_of_release: 0,
    genres: "",
    description: "",
    rating: 0,
    runtime: 0,
  });

  const addMovie = () => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/movies`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie();
  };

  return (
    <div className="newMovie">
      <form onSumbit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={movie.title}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="yearOfRelease">Year of Release:</label>
        <input
          id="yearOfRelease"
          value={movie.year_of_release}
          type="number"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          value={movie.genre}
          type="text"
          name="genre"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={movie.description}
          type="text"
          name="description"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={movie.rating}
          type="number"
          name="rating"
          onChange={handleTextChange}
          min={1}
          max={5}
          required
         />
         <br />
         <label htmlFor="runtime">Runtime:</label> 
         <input
          id="runtime"
          value={movie.runtime}
          type="number"
          name="runtime"
          onChange={handleTextChange}
          />
          <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MovieNewForm;