import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {cancelDeficiency, reportDeficiency} from "../deficienciesSlice";

const emptyOption = '-';

export const DeficienciesSelect = () => {
  const books = useSelector(({books}) => books.list);
  const deficiencies = useSelector(({deficiencies}) => deficiencies.list);
  const dispatch = useDispatch()
  const [value, setValue] = useState(emptyOption);

  const options = books
    .filter(book => !deficiencies.includes(book.title))
    .map(book => book.title);

  const onChange = e => {
    if (e.target.value === emptyOption) {
      return;
    }
    dispatch(reportDeficiency(e.target.value));
    setValue(emptyOption);
  };

  return (
    <div>
      Zgłoś brak:
      <select value={value} onChange={onChange}>
        <option>{emptyOption}</option>
        {options.map(opt => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
      <br />
      Braki:
      <ul>
        {deficiencies.map(deficiency => (
          <li>
            {deficiency} <button onClick={() => dispatch(cancelDeficiency(deficiency))}>Anuluj</button>
          </li>
        ))}
      </ul>
    </div>
  )
};
