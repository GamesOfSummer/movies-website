import React from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Movie, MovieGenre } from 'src/redux/Types';

const DisplayGenres = () => {
  const { movies } = useSelector((state: RootState) => state.genres);

  return (
    <div className="grid grid-cols-5 gap-1">
      {movies.map((movie: MovieGenre, index) => (
        <div key={index}>
          <div
            key={index}
            className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 rounded"
          >
            {movie.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayGenres;
