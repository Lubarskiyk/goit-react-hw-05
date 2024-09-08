import css from "./MoviesCard.module.css";
import { Link, useLocation } from "react-router-dom";
export default function MoviesCard({ movie }) {
  const url = `https://image.tmdb.org/t/p/w500${movie.poster_path} `;
  const location = useLocation();
  return (
    <>
      <Link to={`/movies/${movie.id}`} state={location}>
        <img src={url} alt={movie.title} className={css.poster} />
      </Link>
      <p>{movie.title}</p>
    </>
  );
}
