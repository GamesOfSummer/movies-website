import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Movie } from './Types';
import axios from 'axios';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com',
    mode: 'no-cors',
    prepareHeaders: (headers, { getState }) => {
      //const token = (getState() as RootState).auth.token
      //const token = await getToken();
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvcGVuSnd0MSIsIm5hbWUiOiJPcGVuSldUWzFdIn0.n8x8GHYe8RQYKkAoMVMlw9-FMZ57bs0HrwxBeJn3hQM';

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        console.log('RUNNING');
        console.log(token);
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },

    // credentials: 'same-origin',
  }),

  endpoints: (builder) => ({
    GetAuthToken: builder.query({
      query: (name) => '/auth/token',
    }),
    getMoviesByName: builder.query<Movie, string>({
      query: (name) => '/movies',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAuthTokenQuery, useGetMoviesByNameQuery } = moviesApi;
