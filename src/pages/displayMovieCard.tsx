import React from 'react';
import { randomId } from 'src/helpers/randomId';
import { truncateSummary } from 'src/helpers/truncateSummary';
import { MovieTemp } from 'src/redux/Types';

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

export const MovieCardDetails = ({ movie }: MovieTemp) => {
  return (
    <div>
      {movie ? (
        <div
          key={movie.title}
          className="overflow-hidden border-2 border-cyan-500 pb-5 rounded h-40"
        >
          {movie && movie.posterUrl ? (
            <div className="float-left p-1">
              <img
                src={movie.posterUrl}
                width="100"
                height="200"
                alt={movie.title}
              />
            </div>
          ) : (
            <div style={{ height: 100, width: 200 }} />
          )}

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
      ) : (
        <div />
      )}
    </div>
  );
};
