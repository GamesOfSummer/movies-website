import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addFilterGenre, removeFilterGenre } from 'src/redux/filterSlice';
import { useAppDispatch } from 'src/redux/hooks';

const DisplayGenresButton = (genre2: any) => {
  const { genre } = genre2;

  const dispatch = useAppDispatch();
  const [buttonOn, setButtonOn] = useState(true);

  const handleClick = () => {
    setButtonOn(!buttonOn);

    if (buttonOn) {
      dispatch(addFilterGenre(genre));
    } else {
      dispatch(removeFilterGenre(genre));
    }
  };

  return (
    <div className="animate__animated animate__fadeInLeft">
      {buttonOn ? (
        <button
          onClick={() => handleClick()}
          className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-s font-semibold p-1 px-3 rounded"
        >
          {genre}
        </button>
      ) : (
        <button
          onClick={() => handleClick()}
          className="w-50 bg-gray-300 text-white text-s font-semibold p-1 rounded"
        >
          {genre}
        </button>
      )}
    </div>
  );
};

export default DisplayGenresButton;
