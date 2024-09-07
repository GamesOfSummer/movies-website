import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { Filters, Movie } from 'src/redux/Types';
import { MovieCard, MovieCardNotAMatch } from './displayMovieCard';

const MatchOnGenre = (movie: Movie, filters: string[]): boolean => {
  if (filters.length === 0) {
    return true;
  }

  return movie.genres.some((genre) => filters.includes(genre.title));
};

const DisplayMovies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const { filters } = useSelector((state: RootState) => state.filtersState);

  const itemsPerPage = 15;
  const totalItems = movies.length;
  const [pageNumber, setPageNumber] = useState(0);
  let endNumber = pageNumber + itemsPerPage;

  const cutMoviesArray = movies.slice(pageNumber, endNumber);

  const handleClickIncrement = () => {
    setPageNumber(pageNumber + itemsPerPage);
  };

  const handleClickDecrement = () => {
    setPageNumber(pageNumber - itemsPerPage);
  };

  return (
    <div>
      <h1>{`Movies Found :: ${movies.length}`}</h1>

      <button
        onClick={() => handleClickIncrement()}
        className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 rounded"
      >
        PageUp
      </button>

      <button
        onClick={() => handleClickDecrement()}
        className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 rounded"
      >
        PageDown
      </button>

      <div className="grid grid-cols-3 gap-1">
        {cutMoviesArray.map((movie: Movie) =>
          MatchOnGenre(movie, filters) ? (
            <MovieCard key={movie.id} movie={movie} />
          ) : (
            <MovieCardNotAMatch key={movie.id} movie={movie} />
          )
        )}
      </div>
    </div>
  );
};

export default DisplayMovies;
