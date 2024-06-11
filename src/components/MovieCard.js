import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const handleDownload = () => {
    alert(`Downloading ${movie.Title}`);
  };

  return (
    <div className="movie-card">
      {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Runtime: {movie.Runtime}</p>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default MovieCard;
