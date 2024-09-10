import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../api/movi-api.js";
import Loader from "../../components/Loader/Loader.jsx";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!moviesCast) {
      return;
    }
    async function fetchMoviesCast() {
      try {
        setLoading(true);
        setError(false);
        const res = await getMoviesReviews(movieId, "credits");
        setMoviesCast(res.cast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesCast();
  }, [movieId]);

  return loading ? (
    <Loader />
  ) : moviesCast.length > 0 ? (
    <ul className={css.castList}>
      {moviesCast.map(cast => (
        <li key={cast.id} className={css.castItem}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
            className={css.image}
          />
          <div>
            <p>Name:</p>
            <p className={css.text}>{cast.name}</p>
            <p className={css.text}>Character:</p>
            <p>{cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not Reviews</p>
  );
}
