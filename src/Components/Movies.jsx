import { useEffect, useState } from "react";
import Movie from "./Movie";
const API = import.meta.env.VITE_BASE_URL

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies`)
    .then((response) => response.json())
    .then( movies => setMovies(movies))
    .catch(error => console.log(error))
  }, [])

  return(
    <div className="Movies">
      <section>
        <table>
          <thread>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this movie</th>
            </tr>
          </thread>
          <tbody>
            {movies.map((movie, index) => {
              return <Movie key={index} movie={movie} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Movies;