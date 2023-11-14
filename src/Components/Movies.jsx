import { useEffect, useState } from "react";
import Movie from "./Movie";
const API = import.meta.env.VITE_API_URL;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies`)
      .then((response) => response.json())
      .then((data) => setMovies(data.data.payload))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Movies">
      <section>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year of Release</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Movies;
