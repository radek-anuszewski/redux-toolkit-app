import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, addCustomers} from "../customersSlice";

export const CustomersList = () => {
  const customers = useSelector(({customers}) => {
    return Object.values(customers.entities);
  });
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const addManyCustomers = () => {
    dispatch(addCustomers([{id: new Date().getTime() + 1,name: 'Jan'},
        {id: new Date().getTime() + 2,name: 'Marek'}]))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    dispatch(addCustomer({id: new Date().getTime(),name}));
    setName('');
  }

  return (
    <div>
      <div>
        <button onClick={addManyCustomers}>Dodaj wielu klientów</button>
      </div>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Dodaj klienta</button>
      </form>
      Klienci:
      <ul>{customers.map(customer => <li key={customer.id}>{customer.name}</li>)}</ul>
    </div>
  )
}
