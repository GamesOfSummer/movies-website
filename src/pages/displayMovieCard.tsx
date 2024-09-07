import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Filters, Movie } from 'src/redux/Types';

export const MovieCard = ({ movie }: Movie) => {
  return (
    <div className="animate__animated animate__delay-1s animate__slow animate__fadeIn ">
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

export const MovieCardDetails = ({ movie }: Movie) => {
  return (
    <div key={movie.id} className="border-2 p-0 rounded">
      <img src={movie.posterUrl} className=" w-40 h-auto" alt={movie.name} />

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
      <div className="text-sm">{movie.rating} </div>
      <div className="text-sm">{movie.duration} </div>
      <div className="text-sm">{movie.summary} </div>
    </div>
  );
};
