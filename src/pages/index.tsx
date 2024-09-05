import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setArray } from 'src/redux/moviesSlice';
import { SetAxiosHeaders } from './authenticate';
import { BASEURL } from 'src/redux/Constants';

const Home: NextPage = () => {
  useEffect(() => {
    SetAxiosHeaders();
  }, []);

  const dispatch = useAppDispatch();
  const [searchState, setSearchState] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchState(value);
  };

  async function Search(): Promise {
    try {
      const response2 = await axios.get(BASEURL + '?search=' + searchState);

      console.log(response2.data.data);

      // dispatch(setArray(response2.data.data));
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
      <header className="w-3/5 my-5 mx-auto text-center">
        <h1 className="bg-purple-400 text-white text-2xl font-semibold p-4 rounded">
          Movies R Us
        </h1>

        <input
          type="text"
          placeholder="Search.."
          onChange={handleChange}
          className="border-2"
        />
        <button
          type="button"
          className="bg-purple-400 text-white text-xl font-semibold p-2 rounded"
          onClick={() => Search()}
        >
          Search!
        </button>
      </header>
    </Fragment>
  );
};

export default Home;
