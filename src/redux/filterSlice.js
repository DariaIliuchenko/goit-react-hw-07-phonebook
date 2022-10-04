import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;