import { getMoviesTrending } from "../../api/movi-api.js";
import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import Loader from "../../components/Loader/Loader.jsx";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    async function fetchMoviesTrending() {
      if (moviesTrending.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        setError(false);
        const res = await getMoviesTrending();
        setMoviesTrending(res);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMoviesTrending();
  }, []);

  return (
    <div>{loading ? <Loader /> : <MoviesList movies={moviesTrending} />}</div>
  );
}
