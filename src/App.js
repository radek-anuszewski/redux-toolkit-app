import React from 'react';
import {BookList} from "./features/books/BookList/BookList";
import {BookAdd} from "./features/books/BookAdd/BookAdd";
import {DeficienciesSelect} from "./features/deficiencies/DeficienciesSelect/DeficienciesSelect";

function App() {
  return (
    <main>
      <BookAdd />
      <BookList/>
      <DeficienciesSelect/>
    </main>
  );
}

export default App;
