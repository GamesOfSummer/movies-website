/* eslint-disable react-hooks/exhaustive-deps */
import axios, { AxiosError } from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setMoviesArray } from 'src/redux/moviesSlice';
import { setGenresArray } from 'src/redux/movieGenresSlice';
import SetAxiosHeaders from '../helpers/authenticate';
import { BASEURL } from 'src/redux/Constants';

import GetMovieGenres from '../helpers/getMovieGenres';
import { Movie } from 'src/redux/Types';
import DisplayMovies from './displayMovies';
import DisplayGenres from './displayGenres';
import 'animate.css';

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
  const [searchState, setSearchState] = useState('');

  const handleChange = (event: any) => {
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
          const { data } = await axios.get(BASEURL + '/movies/' + movie.id);

          const updatedMovie: Movie = {
            id: data.id,
            title: data.title,
            genres: data.genres,
            posterUrl: data.posterUrl,
            rating: data.rating,
            duration: data.duration,
            summary: data.summary,
          };

          return updatedMovie;
        })
      );

      // @ts-ignore
      dispatch(setMoviesArray(output));
    } catch (e: AxiosError | any) {
      if (axios.isAxiosError(e)) {
        console.log('AxiosError ------------------');
        console.log(e);
      } else {
        console.log('Error ------------------');
        console.log(e);
      }
    }
  }

  async function SurpriseMe(): Promise<void> {
    const array = ['lion', 'aladdin', 'mermaid', 'beauty', 'Fantasia'];

    const random = Math.floor(Math.random() * array.length);
    setSearchState(array[random]);
    await Search();
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
          <div className="animate__animated animate__bounce animate__repeat-2">
            So, what are you watching tonight?
          </div>
        </h1>

        <div className="animate__animated animate__delay-2s animate__fadeIn">
          <input
            type="text"
            placeholder="Think of a movie title!"
            onChange={handleChange}
            className="border-2 mx-10 my-5"
          />
          <button
            type="button"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-semibold rounded px-10"
            onClick={() => Search()}
          >
            Search
          </button>
          <button
            type="button"
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl font-semibold rounded px-10 ml-5"
            onClick={() => SurpriseMe()}
          >
            Surprise Me
          </button>
        </div>

        {DisplayGenres()}
        {DisplayMovies()}
      </header>
    </Fragment>
  );
};

export default Home;
