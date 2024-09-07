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
    setArray: (state, action: any) => {
      state.movies = action.payload;
    },
  },
});

export const { setArray } = moviesSlice.actions;

export default moviesSlice.reducer;
