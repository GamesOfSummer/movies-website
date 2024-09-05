import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import { moviesSlice } from './moviesSlice';

export const store = configureStore({
  reducer: { userInfo: userSlice, movies: moviesSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
