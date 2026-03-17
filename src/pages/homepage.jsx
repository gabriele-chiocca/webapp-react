import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <h1 className="mt-4">Lista Film</h1>

      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top h-100"
                  src={`http://localhost:3000/img/movies_cover/${movie.image}`}
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                    Dettaglio
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
