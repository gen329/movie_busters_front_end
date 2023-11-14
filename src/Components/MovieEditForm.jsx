import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MovieEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    year_of_release: "",
    genre: "",
    description: "",
    rating: 0,
    runtime: 0,
  });

  const handleTextChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value });
  };

  const updateMovie = () => {
    console.log(`${API}/movies/${id}`);

    fetch(`${API}/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/movies/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setMovie(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMovie();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={movie.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={movie.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={movie.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={movie.description}
          onChange={handleTextChange}
          placeholder=""
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/movies/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default MovieEditForm;

