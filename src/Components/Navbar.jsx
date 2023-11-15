import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <header className="banner">
        MOVIE BUSTERS
      </header>
      <button>
        <Link to="/movies">Home</Link>
      </button>
      <button>
        <Link to="/movies/new">New Movie</Link>
      </button>
    </nav>
  );
}