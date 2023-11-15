import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="title">
      <h1>
        <Link to="/movies">Movies</Link>
      </h1>
      <button>
        <Link to="/movies/new">New Movie</Link>
      </button>
    </nav>
  );
}