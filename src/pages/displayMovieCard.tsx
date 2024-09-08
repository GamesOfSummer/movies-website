import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Filters, Movie } from 'src/redux/Types';

export const MovieCard = ({ movie }: Movie) => {
  return (
    <div className="animate__animated animate__delay-1s animate__zoomInRight ">
      <MovieCardDetails key={movie.id} movie={movie} />
    </div>
  );
};

export const MovieCardNotAMatch = ({ movie }: Movie) => {
  return (
    <div className="opacity-20">
      <MovieCardDetails key={movie.id} movie={movie} />
    </div>
  );
};

const truncateSummary = (summary: string) => {
  if (summary.length > 100) {
    return summary.slice(0, 100) + '...';
  }
  return summary;
};

export const MovieCardDetails = ({ movie }: Movie) => {
  return (
    <div key={movie.id} className="border-2 border-cyan-500 p-1 rounded h-40">
      <div className="float-left">
        {' '}
        <img src={movie.posterUrl} className="h-40" alt={movie.name} />
      </div>

      <div className="text-left">
        <div className="text-sm">{movie.title} </div>
        <div className="grid grid-cols-2 gap-1">
          {movie.genres.map((genre: string, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs p-1 rounded"
            >
              {genre.title}
            </div>
          ))}
        </div>
        <div className="text-sm">
          {movie.rating} // {movie.duration}
        </div>

        <div className="text-sm">{truncateSummary(movie.summary)} </div>
      </div>
    </div>
  );
};
