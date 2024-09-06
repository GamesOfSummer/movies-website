import React from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Movie } from 'src/redux/Types';

const DisplayMovies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);

  console.log('displayMovies');
  console.log(movies);
  console.log(movies);
  console.log('END displayMovies');

  return (
    <div>
      <h1>Names List</h1>
      <h1>{movies.length}</h1>
      <ul>
        {movies.map((movie: Movie, index) => (
          <div key={index}>
            <li key={index}>{movie.id}</li>
            <li key={index}>{movie.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayMovies;
