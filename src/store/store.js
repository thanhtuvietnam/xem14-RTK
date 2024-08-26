import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from './apiSlice/homeApi.slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import loadingReducer from './mainSlice/LoadingSlice/loadingSlice';
import searchReducer from './searchSlice/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    loadingState: loadingReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware),
});

setupListeners(store.dispatch);
