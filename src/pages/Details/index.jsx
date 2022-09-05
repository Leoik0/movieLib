import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKey } from "../../config/key";
import { Container } from "./styled";

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };

        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt="" />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="releaseDate">Release Date: {movie.releaseDate}</span>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Details;
