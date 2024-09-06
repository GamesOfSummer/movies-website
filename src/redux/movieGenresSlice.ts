import type { Movie, MovieGenreState, MoviesSearched } from './Types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieGenreState = {
  movies: [],
};

export const moviesGenresSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenresArray: (state, action: any) => {
      console.log(action);
      console.log(state.movies);

      state.movies = action.payload;
    },
  },
});

export const { setGenresArray } = moviesGenresSlice.actions;

export default moviesGenresSlice.reducer;
