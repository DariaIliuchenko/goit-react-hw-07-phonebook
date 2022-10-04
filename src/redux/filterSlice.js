import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    filterContact: (state, {payload}) => {
      state.filter = payload;
    },
  },
});
export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;