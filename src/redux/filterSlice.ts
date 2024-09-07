import type { Filters } from './Types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Filters = {
  filters: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterGenre: (state, action: any) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      }
    },
    removeFilterGenre: (state, action: any) => {
      state.filters = state.filters.filter((genre) => genre !== action.payload);
    },
  },
});

export const { addFilterGenre, removeFilterGenre } = filterSlice.actions;

export default filterSlice.reducer;
