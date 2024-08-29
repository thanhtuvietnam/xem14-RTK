import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Loading: false,
  Error: false,
  activeOther: null,
};

const loadingSlice = createSlice({
  name: 'loadingState',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.Loading = action.payload;
    },
    setError: (state, action) => {
      state.Error = action.payload;
    },
    setActiveOther: (state, action) => {
      state.activeOther = action.payload;
    },
  },
});

export const { setLoading, setError, setActiveOther } = loadingSlice.actions;

export default loadingSlice.reducer;
