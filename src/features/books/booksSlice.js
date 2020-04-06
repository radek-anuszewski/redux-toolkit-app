import { createSlice } from '@reduxjs/toolkit';
import {cancelDeficiency, reportDeficiency} from "../deficiencies/deficienciesSlice";

const slice = createSlice({
  name: 'books',
  initialState: {
    list: [
      {title: 'Dzieci z Bullerbyn', deficiency: false},
      {title: 'Hobbit', deficiency: false},
      {title: 'Władca Pierścieni', deficiency: false},
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push({title: action.payload, deficiency: false});
    },
    deleteBook: (state, action) => {
      state.list = state.list.filter(book => book.title !== action.payload);
    }
  },
  extraReducers: {
    [reportDeficiency]: (state, action) => {
      const book = state.list.find(book => book.title === action.payload);
      book.deficiency = true;
    },
    [cancelDeficiency]: (state, action) => {
      const book = state.list.find(book => book.title === action.payload);
      book.deficiency = false;
    },
  }
});

export const booksReducer = slice.reducer;

export const {addBook, deleteBook} = slice.actions;