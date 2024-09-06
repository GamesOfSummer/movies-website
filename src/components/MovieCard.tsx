import React, { useEffect, useState } from 'react';
import { Movie } from 'src/redux/Types';

export const MovieCard = (movie: Movie) => {
  return (
    <div className="bg-white m-5 border border-gray-300 rounded-md outline-1">
      <div className="bg-white m-5 border border-gray-300 rounded-md outline-1"></div>

      <div className="left-0 top-0 text-xs text-gray-400">{movie.id}</div>
    </div>
  );
};
