/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { MovieTemp } from 'src/redux/Types';

const randomId = function () {
  return Math.random().toString(36).substring(2, 8);
};

const MovieCard = ({ movie }: MovieTemp) => {
  return (
    <div className="animate__animated animate__slow animate__fadeIn ">
      <MovieCardDetails key={randomId()} movie={movie} />
    </div>
  );
};

export default MovieCard;

export const MovieCardNotAMatch = ({ movie }: MovieTemp) => {
  return (
    <div className="opacity-20">
      <MovieCardDetails key={randomId()} movie={movie} />
    </div>
  );
};

const truncateSummary = (summary: string) => {
  if (!!summary && summary.length > 100) {
    return summary.slice(0, 100) + '...';
  }
  return summary;
};

export const MovieCardDetails = ({ movie }: MovieTemp) => {
  return (
    <div
      key={movie.title}
      className="overflow-hidden border-2 border-cyan-500 pb-5 rounded h-40"
    >
      <div className="float-left p-1">
        <img src={movie.posterUrl} className="h-40" alt={movie.title} />
      </div>

      <div className="text-left">
        <div className="text-sm">{movie.title} </div>
        <div className="grid grid-cols-2 gap-1">
          {movie.genres.map((genre: any, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs p-1 rounded"
            >
              {genre.title}
            </div>
          ))}
        </div>
        <div className="text-sm">
          {movie.rating} || {movie.duration}
        </div>

        <div className="text-sm">{truncateSummary(movie.summary)} </div>
      </div>
    </div>
  );
};
