import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DisplayGenresButton } from './DisplayGenresButton';

export const DisplayGenres = () => {
  const { movieGenres } = useSelector((state: RootState) => state.genres);

  const genresOnly: string[] = movieGenres.reduce((acc, movieGenre) => {
    acc.push(movieGenre.title);
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-5 gap-1">
      {genresOnly.map((genre: string) => (
        <DisplayGenresButton genre={genre} />
      ))}
    </div>
  );
};

export default DisplayGenres;
