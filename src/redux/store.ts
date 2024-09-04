import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';

export const store = configureStore({
  reducer: { userInfo: userSlice },
});

export type AppState = ReturnType;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction;

export default store;
