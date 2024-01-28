// MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ moviesData }) => {
  return (
    <div>
      {moviesData.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
