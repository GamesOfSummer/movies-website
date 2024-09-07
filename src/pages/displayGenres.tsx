import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayGenresButton from './DisplayGenresButton';
import { RootState } from 'src/redux/store';

export const DisplayGenres = () => {
  const { movieGenres } = useSelector((state: RootState) => state.genres);

  const genresOnly: string[] = movieGenres.reduce((acc, movieGenre) => {
    acc.push(movieGenre.title);
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-8 gap-1">
      {genresOnly.map((genre: string) => (
        <DisplayGenresButton key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default DisplayGenres;
