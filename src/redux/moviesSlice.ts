import type { MoviesSearched } from './Types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: MoviesSearched = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesArray: (state, action: any) => {
      state.movies = action.payload;
    },
  },
});

export const { setMoviesArray } = moviesSlice.actions;

export default moviesSlice.reducer;
