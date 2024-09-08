import css from "./MovieDeteils.module.css";
export default function MovieDetails({ moviesDetails }) {
  return (
    <div className={css.detail}>
      <img
        src={`https://image.tmdb.org/t/p/w500${moviesDetails.poster_path} `}
        alt={moviesDetails.title}
        className={css.image}
      />
      <div>
        <h1>{moviesDetails.title}</h1>
        <p>User Score {moviesDetails.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{moviesDetails.overview}</p>
        <h2>Genres</h2>
        <ul className={css.genresList}>
          {moviesDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>

        <h2>Home page </h2>
        <a href={moviesDetails.homepage} target="_blank">
          {moviesDetails.homepage}
        </a>
      </div>
    </div>
  );
}
