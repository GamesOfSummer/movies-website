import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { NavigationLink } from 'src/components';
import { useGetMoviesByNameQuery } from 'src/redux/moviesAPI';

export async function getToken(): Promise {
  let token = '';

  try {
    const response = await axios.get(
      'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com/auth/token'
    );

    const token = response.data.token;

    //const headers = ;

    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const response2 = await axios.get(
      'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com/movies'
    );

    console.log(response2);
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

const Home: NextPage = () => {
  getToken();

  return (
    <Fragment>
      <Head>
        <title>next12-react-query-tailwind starter kit</title>
        <meta name="description" content="Generated using starter.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-3/5 my-5 mx-auto text-center">
        <h1 className="bg-blue-600 text-white text-2xl font-semibold p-4 rounded">
          Create Next app with React Query and Tailwind
        </h1>
        <ul>
          <li className="my-2.5">
            <NavigationLink
              to="/counter-example"
              label="See Counter example component"
            />
          </li>
          <li className="my-2.5">
            <NavigationLink
              to="/fetch-example"
              label="See Fetch example component"
            />
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Home;
