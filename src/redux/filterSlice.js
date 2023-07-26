import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchContact: (state, action) => {
      return action.payload;
    },
  },
});

export const { searchContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
