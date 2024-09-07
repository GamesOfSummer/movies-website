import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setMoviesArray } from 'src/redux/moviesSlice';
import { setGenresArray } from 'src/redux/movieGenresSlice';
import { SetAxiosHeaders } from './authenticate';
import { BASEURL } from 'src/redux/Constants';

import { GetMovieGenres } from './getGenres';
import { Movie } from 'src/redux/Types';
import DisplayMovies from './displayMovies';
import DisplayGenres from './displayGenres';

const Home: NextPage = () => {
  useEffect(() => {
    const Setup = async (): Promise<void> => {
      await SetAxiosHeaders();
      const genreArray = await GetMovieGenres();
      dispatch(setGenresArray(genreArray));
    };

    Setup();
  }, []);

  const dispatch = useAppDispatch();
  const [searchState, setSearchState] = useState('all');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchState(value);
  };

  async function Search(): Promise<void> {
    try {
      const { data } = await axios.get(
        BASEURL + '/movies?search=' + searchState
      );

      let output = await Promise.all(
        data.data.map(async (movie: any) => {
          const data = await axios.get(BASEURL + '/movies/' + movie.id);

          console.log('what else is there');
          console.log(data);

          const updatedMovie: Movie = {
            id: data.data.id,
            title: data.data.title,
            genres: data.data.genres,
            posterUrl: data.data.posterUrl,
            rating: data.data.rating,
            duration: data.data.duration,
            summary: data.data.summary,
          };

          return updatedMovie;
        })
      );

      dispatch(setMoviesArray(output));
    } catch (e: Error | AxiosError) {
      if (axios.isAxiosError(e)) {
        console.log('AxiosError ------------------');
        console.log(e);
      } else {
        console.log('Error ------------------');
        console.log(e);
      }
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Movies R Us</title>
        <meta name="description" content="Generated using starter.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-4/5 mx-auto text-center">
        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl font-semibold py-4 rounded">
          So, what are you watching tonight?
        </h1>

        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          className="border-2 mx-10 my-5"
        />
        <button
          type="button"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-semibold rounded px-10"
          onClick={() => Search()}
        >
          Only way to find out...
        </button>

        {DisplayGenres()}
        {DisplayMovies()}
      </header>
    </Fragment>
  );
};

export default Home;
