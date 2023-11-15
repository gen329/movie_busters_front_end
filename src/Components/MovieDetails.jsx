import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/movies/${index}`)
    .then(response => response.json())
    .then(movie => {
      console.log(movie)
      setMovie(movie)
    })
    .catch(() => navigate("/not-found"))
  }, [index,navigate]);

  const handleDelete = () => {
    const httpOptions = { "method" : "DELETE" };

    fetch(`${API}/movies/${index}`, httpOptions)
    .then((response) => {
      console.log(response)
      alert("Success - movie was deleted!");
      navigate('/movies');
    })
    .catch((error) => console.error(error))

    return (
      <article>
        <h3>{movie.title}</h3>
      </article>
    )
  }
}

export default MovieDetails;