import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={cardStyle}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: '200px' }} />
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      {/* Link to the movie description page */}
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};
const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px',
  textAlign: 'center',
  width: '220px',
};

export default MovieCard;