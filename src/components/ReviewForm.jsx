import { useState } from 'react';
import axios from 'axios';

export default function ReviewForm({ movieId, fetchFilm }) {
  const [name, setName] = useState('');
  const [vote, setVote] = useState('');
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/movies/${movieId}/reviews`, {
        name,
        vote,
        text,
      })
      .then((res) => {
        console.log(res.data);
        setName('');
        setVote('');
        setText('');

        fetchFilm();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Voto</label>
          <input
            type="number"
            className="form-control"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Recensione</label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Invia
        </button>
      </form>
    </>
  );
}
