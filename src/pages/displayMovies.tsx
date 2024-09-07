import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Filters, Movie } from 'src/redux/Types';

const MovieCard = ({ movie }: Movie) => {
  return (
    <div key={movie.id} className="border-2 p-2 rounded">
      {movie.title}

      <img src={movie.posterUrl} alt="Description of image" />

      {movie.genres.map((genre: string, index) => (
        <li key={index}>{genre.title}</li>
      ))}
    </div>
  );
};

const MatchOnGenre = (movie: Movie, filters: string[]): boolean => {
  if (filters.length === 0) {
    return true;
  }

  return movie.genres.some((genre) => filters.includes(genre.title));
};

const MovieCardNotAMatch = ({ movie }: Movie) => {
  return (
    <div key={movie.id} className="border-2 p-2 rounded">
      {movie.title} - Not a match!
    </div>
  );
};

const DisplayMovies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const { filters } = useSelector((state: RootState) => state.filtersState);

  const itemsPerPage = 15;
  const totalItems = movies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
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

      {cutMoviesArray.map((movie: Movie) =>
        MatchOnGenre(movie, filters) ? (
          <MovieCard movie={movie} />
        ) : (
          <MovieCardNotAMatch movie={movie} />
        )
      )}
    </div>
  );
};

export default DisplayMovies;
