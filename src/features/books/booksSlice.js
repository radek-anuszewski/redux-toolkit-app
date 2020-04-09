import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {cancelDeficiency, reportDeficiency} from "../deficiencies/deficienciesSlice";

const loadBooks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [
          {
            title: 'Książka z serwera',
            deficiency: false,
          }
        ]
      )
    }, 5000);
  })
};

export const getBooks = createAsyncThunk(
  'LOAD_BOOKS',
  async() => {
    const response = await loadBooks();
    return response;
  }
)

const slice = createSlice({
  name: 'books',
  initialState: {
    list: [
      {title: 'Dzieci z Bullerbyn', deficiency: false},
      {title: 'Hobbit', deficiency: false},
      {title: 'Władca Pierścieni', deficiency: false},
    ],
    loading: false,
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
    [getBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.list.push(...action.payload)
    },
  }
});

export const booksReducer = slice.reducer;

export const {addBook, deleteBook} = slice.actions;
