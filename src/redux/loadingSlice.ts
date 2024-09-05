import type { Loading, Movie, MoviesSearched } from './Types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Loading = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: any) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
