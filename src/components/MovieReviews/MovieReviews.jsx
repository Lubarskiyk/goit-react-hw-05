import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../api/movi-api.js";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./MovieReviews.module.css";
import { useOutletContext } from "react-router-dom";

export default function MovieReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesReviews, setMoviesReviews] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    if (moviesReviews.length > 0) {
      return;
    }

    async function fetchMoviesReviews() {
      try {
        setLoading(true);
        setError(false);
        const res = await getMoviesReviews(movieId, "reviews");
        setMoviesReviews(res.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesReviews();
  }, []);

  return loading ? (
    <Loader />
  ) : moviesReviews.length > 0 ? (
    <ul className={css.reviewList}>
      {moviesReviews.map(({ author, content, id }) => (
        <li key={id} className={css.reviewItem}>
          <p className={css.text}>Autor: {author}</p>
          <p className={css.text}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not</p>
  );
}
