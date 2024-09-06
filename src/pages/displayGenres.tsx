import React from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Movie, MovieGenre } from 'src/redux/Types';

const DisplayGenres = () => {
  const { movies } = useSelector((state: RootState) => state.genres);

  return (
    <div>
      <ul>
        {movies.map((movie: MovieGenre, index) => (
          <div key={index}>
            <div
              key={index}
              className="w-50 bg-purple-400 text-white text-s font-semibold p-1 rounded"
            >
              {movie.title}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayGenres;
