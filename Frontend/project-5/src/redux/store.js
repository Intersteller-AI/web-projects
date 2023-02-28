import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import {shazamApi} from './services/shazanCore'

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware)
});
