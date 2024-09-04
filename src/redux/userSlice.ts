import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from './Types';

const initialState: User = {
  id: '',
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction) => {
      state.id = action.payload.name;
    },
  },
});

export const { setId } = userSlice.actions;

export default userSlice.reducer;
