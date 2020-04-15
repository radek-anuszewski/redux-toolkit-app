import { configureStore } from '@reduxjs/toolkit';
import { booksReducer} from "../features/books/booksSlice";
import { deficienciesReducer } from "../features/deficiencies/deficienciesSlice";
import { customersReducer } from "../features/customers/customersSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    deficiencies: deficienciesReducer,
    customers: customersReducer,
  },
});

export default store;
