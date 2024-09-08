import { combineReducers, configureStore } from '@reduxjs/toolkit';

import moviesReducer from './moviesSlice';
import loadingReducer from './loadingSlice';
import movieGenresReducer from './movieGenresSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: movieGenresReducer,
  loading: loadingReducer,
  filtersState: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
