import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Movie } from './Types';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Movie[] = [];

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setArray: (state, action: PayloadAction) => {
      state = state.push(action.payload.name);
    },
  },
});

export const { setArray } = moviesSlice.actions;

export default moviesSlice.reducer;
