import { createSlice } from '@reduxjs/toolkit';

const initialState = { query: null };

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, { payload }) {
      return { ...state, query: payload };
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
