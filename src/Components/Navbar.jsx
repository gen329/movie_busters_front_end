import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
     <header className="banner">
      MOVIE BUSTERS
     </header> 
      <h2>
        <Link to="/movies">SEE ALL MOVIES</Link>
      </h2>
      <button>
        <Link to="/movies/new">New Movie</Link>
      </button>
    </nav>
  );
}