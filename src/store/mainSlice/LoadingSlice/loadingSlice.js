import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Loading: false,
  Error: false,
  Dropdown: null,
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
    setDropdown: (state, action) => {
      state.Dropdown = !state.Dropdown;
    },
  },
});

export const { setLoading, setError, setDropdown } = loadingSlice.actions;

export default loadingSlice.reducer;
