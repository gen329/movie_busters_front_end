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
        <label htmlFor="yearOfRelease">Year of Release:</label>
        <input
          id="yearOfRelease"
          type="number"
          name="year"
          value={movie.year_of_release}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={movie.genre}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={movie.description}
          onChange={handleTextChange}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MovieNewForm;