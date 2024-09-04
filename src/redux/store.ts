import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import { moviesApi } from './moviesAPI';

export const store = configureStore({
  reducer: { userInfo: userSlice, [moviesApi.reducerPath]: moviesApi.reducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
