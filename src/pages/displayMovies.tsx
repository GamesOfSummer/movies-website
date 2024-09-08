import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { Movie } from 'src/redux/Types';
import MovieCard, { MovieCardNotAMatch } from './displayMovieCard';

const MatchOnGenre = (movie: Movie, filters: string[]): boolean => {
  if (filters.length === 0) {
    return true;
  }
  // @ts-ignore
  return movie.genres.some((genre) => filters.includes(genre.title));
};

const DisplayMovies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const { filters } = useSelector((state: RootState) => state.filtersState);

  const itemsPerPage = 6;
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
      {movies.length > 0 ? (
        <div>
          <div className="text-xl">{`Movies Found :: ${movies.length}`}</div>

          {pageNumber > 0 ? (
            <button
              onClick={() => handleClickDecrement()}
              className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 rounded"
            >
              Previous Page
            </button>
          ) : (
            <div />
          )}

          {movies.length > itemsPerPage ? (
            <button
              onClick={() => handleClickIncrement()}
              className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 rounded"
            >
              Next Page
            </button>
          ) : (
            <div />
          )}
        </div>
      ) : (
        <div />
      )}

      <div className="grid grid-cols-2 gap-2">
        {cutMoviesArray.length > 0 &&
          cutMoviesArray.map((movie: Movie) =>
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
