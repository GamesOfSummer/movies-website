import React from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Movie } from 'src/redux/Types';

const DisplayMovies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const { filters } = useSelector((state: RootState) => state.filtersState);

  return (
    <div>
      <h1>{`Movies Found :: ${movies.length}`}</h1>

      {movies.map((movie: Movie, index) => (
        <div key={movie.id} className="border-2 p-2 rounded">
          {movie.genres.map((genre: string) =>
            filters.includes(genre.title) ? (
              <div key={index}>MATCH</div>
            ) : (
              <div key={index}>no match {genre.title}</div>
            )
          )}

          <li>{movie.id}</li>
          <li>{movie.title}</li>

          {movie.genres.map((genre: string, index) => (
            <li key={index}>{genre.title}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DisplayMovies;
