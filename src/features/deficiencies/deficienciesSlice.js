import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'deficiencies',
  initialState: {
    list: [],
  },
  reducers: {
    reportDeficiency: (state, action) => {
      state.list.push(action.payload);
    },
    cancelDeficiency: (state, action) => {
      state.list = state
        .list.filter(el => el !== action.payload);
    },
  },
});

export const {cancelDeficiency, reportDeficiency} = slice.actions;

export const deficienciesReducer = slice.reducer;
