import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDYwZTA4MTAyMDlhMmMzNDY5NDQwZGI5OTViODc2ZiIsIm5iZiI6MTcyNTM1MDEyOC44NTc5MzUsInN1YiI6IjY2ZDZhMTkzYTMyNTZkNGM1OGYwMTljZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YdNKg9FQGxAl0HL3CjEEIX5kaNJG_RowIrWgniyvB7w",
  },
};

export async function getMoviesTrending() {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
}

export async function getMoviesDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return response.data;
}

export async function getMoviesReviews(movieId, param) {
  const response = await axios.get(
    `/movie/${movieId}/${param}?language=en-US`,
    options
  );
  return response.data;
}

export async function getMoviesSearch(moviesSearch) {
  const response = await axios.get(
    `/search/movie?query=${moviesSearch}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
}
