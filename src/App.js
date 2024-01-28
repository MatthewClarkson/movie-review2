//App.js
import React from 'react';
import MovieList from './MovieList';
import './App.css';


const moviesData = [
  {
    id: 1,
    title: 'Inception',
    image: 'inception.jpg',
    synopsis: 'A thief who enters the dreams of others to steal their secrets.',
    rating: 4.5,
    reviews: ['Mind-bending plot!', 'Amazing visuals and soundtrack.'],
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    image: 'shawshank.jpg',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 5,
    reviews: ['One of the best movies ever made!', 'Powerful and emotional.'],
  },
  {
    id: 3,
    title: 'The Dark Knight',
    image: 'darkknight.jpg',
    synopsis: 'When the menace known as The Joker emerges, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.8,
    reviews: ['Heath Ledger as The Joker is phenomenal!', 'Intense action and gripping storyline.'],
  },
 
];


const App = () => {
  return (
    <div>
      <h1>Movie Review</h1>
      <MovieList moviesData={moviesData} />
    </div>
  );
};


export default App;
