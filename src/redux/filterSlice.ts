import type { Filters, Movie, MovieGenreState, MoviesSearched } from './Types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Filters = {
  filters: [],
};

export const filterSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setFiltersArray: (state, action: any) => {
      state.filters = action.payload;
    },
  },
});

export const { setFiltersArray } = filterSlice.actions;

export default filterSlice.reducer;
