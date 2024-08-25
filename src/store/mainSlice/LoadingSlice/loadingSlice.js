import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Loading: false,
  totalItems: 0,
};

const loadingSlice = createSlice({
  name: 'loadingState',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.Loading = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { setLoading, setTotalItems } = loadingSlice.actions;

export default loadingSlice.reducer;
