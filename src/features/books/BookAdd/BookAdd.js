import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addBook} from "../booksSlice";

export const BookAdd = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    dispatch(addBook(name));
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">
        Tytuł
      </label>
      <input value={name} id="title" type="text" onChange={(e) => setName(e.target.value)} />
      <button type="submit">
        Dodaj
      </button>
    </form>
  )
};
