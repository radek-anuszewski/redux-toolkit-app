import { configureStore } from '@reduxjs/toolkit';
import { booksReducer} from "../features/books/booksSlice";
import { deficienciesReducer } from "../features/deficiencies/deficienciesSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
    deficiencies: deficienciesReducer,
  },
});
