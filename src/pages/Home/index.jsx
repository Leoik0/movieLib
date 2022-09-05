import { Container, MoviesList, Movie } from "./styled";
import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Movies Lib</h1>
      <MoviesList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MoviesList>
    </Container>
  );
};

export default Home;
