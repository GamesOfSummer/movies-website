import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import moviesSlice from 'src/redux/moviesSlice';
import { RootState } from 'src/redux/store';
import { Movie, MovieGenre } from 'src/redux/Types';

const DisplayGenresButton = ({ genre }: string) => {
  console.log('---!!!');
  console.log(genre);

  const [buttonOn, setButtonOn] = useState(true);

  const handleClick = () => {
    setButtonOn(!buttonOn);
  };

  return (
    <div>
      {buttonOn ? (
        <button
          onClick={() => handleClick('Hello from button!')}
          className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 rounded"
        >
          {genre}
        </button>
      ) : (
        <button
          onClick={() => handleClick('Hello from button!')}
          className="w-50 text-white text-s font-semibold p-1 rounded"
        >
          {genre}
        </button>
      )}
    </div>
  );
};

const DisplayGenres = () => {
  const { movieGenres } = useSelector((state: RootState) => state.genres);

  const genresOnly: string[] = movieGenres.reduce((acc, movieGenre) => {
    acc.push(movieGenre.title);
    return acc;
  }, []);

  console.log('---');
  console.log(genresOnly);

  return (
    <div className="grid grid-cols-5 gap-1">
      {genresOnly.map((genre: string) => (
        <DisplayGenresButton genre={genre} />
      ))}
    </div>
  );
};

export default DisplayGenres;
