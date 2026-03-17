import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!movie) {
    return <h2>Film selezionato non esistente </h2>;
  }

  return (
    <>
      <div className="container py-4">
        <h1 className="mt-4">{movie.title}</h1>

        <img
          src={`http://localhost:3000/img/movies_cover/${movie.image}`}
          alt={movie.title}
          className="img-fluid mb-4"
        />

        <p>Director:{movie.director}</p>
      </div>
    </>
  );
}
