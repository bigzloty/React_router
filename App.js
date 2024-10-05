import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller that delves into the world of dreams.',
      posterURL: 'https://via.placeholder.com/200',
      rating: 5,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A journey beyond the stars to find the future of mankind.',
      posterURL: 'https://via.placeholder.com/200',
      rating: 4,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'The story of Gotham’s hero who takes on the Joker.',
      posterURL: 'https://via.placeholder.com/200',
      rating: 5,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
  ]);

  return (
    <Router>
      <div>
        <Routes>
          {/* Home Page showing the list of movies */}
          <Route path="/" element={<MovieList movies={movies} />} />
          {/* Movie detail page based on movie ID */}
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;