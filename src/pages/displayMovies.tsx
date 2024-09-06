import React from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Movie } from 'src/redux/Types';

const DisplayMovies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);

  return (
    <div>
      <h1>Names List</h1>
      <h1>{movies.length}</h1>
      <ul>
        {movies.map((movie: Movie, index) => (
          <div key={movie.id} className="border-2 p-2 rounded">
            <li>{movie.id}</li>
            <li>{movie.title}</li>

            {movie.genres.map((genre: string, index) => (
              <li key={index}>{genre.title}</li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayMovies;
