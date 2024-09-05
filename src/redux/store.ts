import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import moviesReducer from './moviesSlice';

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
