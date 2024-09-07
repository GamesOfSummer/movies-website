import type { Movie, MovieGenreState, MoviesSearched } from './Types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieGenreState = {
  movieGenres: [],
};

export const moviesGenresSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setGenresArray: (state, action: any) => {
      state.movieGenres = action.payload;
    },
  },
});

export const { setGenresArray } = moviesGenresSlice.actions;

export default moviesGenresSlice.reducer;
