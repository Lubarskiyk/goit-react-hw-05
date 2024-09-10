import { useEffect, useRef, useState } from "react";
import { getMoviesDetails } from "../../api/movi-api.js";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./MovieDetailsPage.module.css";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";
import { toast, Toaster } from "react-hot-toast";

export default function MovieDetailsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesDetails, setMoviesDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const url = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        setLoading(true);
        setError(false);
        const res = await getMoviesDetails(movieId);
        setMoviesDetails(res);
      } catch (error) {
        toast.error("OPS!!! ");
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={url.current}> Back</Link>
      {error && <Toaster position="top-right" reverseOrder={false} />}
      {loading ? (
        <Loader />
      ) : (
        moviesDetails && <MovieDetails moviesDetails={moviesDetails} />
      )}

      <ul className={css.aboutList}>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
