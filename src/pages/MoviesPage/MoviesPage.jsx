import { Field, Form, Formik } from "formik";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getMoviesSearch } from "../../api/movi-api.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import { useSearchParams } from "react-router-dom";

export default function MovePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieQuery, setMovieQuery] = useSearchParams();
  const search = movieQuery.get("query") ?? "";
  useEffect(() => {
    if (search === "") {
      return;
    }

    async function fetchMoviesSearch() {
      try {
        setLoading(true);
        setError(false);
        const res = await getMoviesSearch(search);
        setMovies(res.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMoviesSearch();
  }, [search]);

  function onSearch(query) {
    movieQuery.set("query", query);
    setMovieQuery(movieQuery);
  }
  return (
    <>
      <Formik
        initialValues={{ query: search }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button type="submit">
            <FiSearch size="16px" />
          </button>
        </Form>
      </Formik>
      <MoviesList movies={movies} />
    </>
  );
}
