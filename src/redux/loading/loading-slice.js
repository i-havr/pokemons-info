import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false };

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      return { ...state, isLoading: payload };
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
