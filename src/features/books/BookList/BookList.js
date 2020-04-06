import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBook} from "../booksSlice";

export const BookList = () => {
  const books = useSelector(({books}) => books.list);
  const dispatch = useDispatch();

  return (
    <>
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
