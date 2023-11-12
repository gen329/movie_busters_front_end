import { Link } from "react-router-dom";

function Movie({ movie, index}) {
  return (
    <tr>
      <td>
        {movie.title}
      </td>
      <td>
        <Link to={`/movies/${index}`}>MOVIES</Link>
      </td>
    </tr>
  );
}

export default Movie;