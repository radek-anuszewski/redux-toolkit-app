import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBook, getBooks} from "../booksSlice";

export const BookList = () => {
  const books = useSelector(({books}) => books.list);
  const loading = useSelector(({books}) => books.loading);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(getBooks())}>
          {loading ? 'Trwa ładowanie...' : 'Pobierz'}
        </button>
      </div>
      Książki:
      <ul>
        {books.map(book => (
          <li>
            {book.title}
            <button
              onClick={() => dispatch(deleteBook(book.title))}
            >
              Usuń
            </button>
            {book.deficiency && (
              <strong>
                Zgłoszony brak
              </strong>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
