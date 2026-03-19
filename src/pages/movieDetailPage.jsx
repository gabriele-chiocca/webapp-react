import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

function renderStars(vote) {
  const stars = [];
  for (let i = 0; i <= 5; i++) {
    if (i <= vote) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star text-secondary"></i>);
    }
  }
  return stars;
}

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
        <div className="row">
          <div className="col-4">
            <img
              src={`http://localhost:3000/img/movies_cover/${movie.image}`}
              alt={movie.title}
              className="img-fluid w-100"
            />
          </div>
          <div className="col-8">
            <h1>{movie.title}</h1>
            <p className="mt-4">
              <strong>Director: </strong>
              {movie.director}
            </p>
            <p>
              <strong>Data di uscita: </strong> {movie.release_year}
            </p>
            <p>
              <strong>Genere: </strong>
              {movie.genre}
            </p>
            <p>
              <strong>Summary: </strong>
              {movie.abstract}
            </p>
            <div>
              <h3>Reviews</h3>
              {movie.reviews.length > 0 ? (
                movie.reviews.map((review) => (
                  <div key={review.id} className="border-bottom p-3 mb-3">
                    <p className="mb-1">
                      <strong> Nome:</strong> {review.name}
                    </p>
                    <p className="mb-1">
                      <strong> Voto:</strong> {renderStars(review.vote)}
                    </p>
                    <p className="mb-1">
                      <strong> Descrizione:</strong> {review.text}
                    </p>
                  </div>
                ))
              ) : (
                <p>Nessuna recensione</p>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <ReviewForm></ReviewForm>
          </div>
        </div>
      </div>
    </>
  );
}
