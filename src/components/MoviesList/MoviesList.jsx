import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <MoviesCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
// <PaymentCard payment={payment} />
