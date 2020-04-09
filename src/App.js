import React from 'react';
import {BookList} from "./features/books/BookList/BookList";
import {BookAdd} from "./features/books/BookAdd/BookAdd";
import {DeficienciesSelect} from "./features/deficiencies/DeficienciesSelect/DeficienciesSelect";
import {CustomersList} from "./features/customers/CustomersList/CustomersList";

function App() {
  return (
    <main>
      <BookAdd />
      <BookList/>
      <DeficienciesSelect/>
      <CustomersList />
    </main>
  );
}

export default App;
