import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addBook} from "../booksSlice";

export const BookAdd = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    dispatch(addBook(title));
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">
        Tytuł
      </label>
      <input value={title} id="title" type="text" onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">
        Dodaj
      </button>
    </form>
  )
};
