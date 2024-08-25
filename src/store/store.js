import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from './apiSlice/homeApi.slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import loadingReducer from './mainSlice/LoadingSlice/loadingSlice';

export const store = configureStore({
  reducer: {
    loadingState: loadingReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware),
});

setupListeners(store.dispatch);
