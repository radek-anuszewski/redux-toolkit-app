import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
const adapter = createEntityAdapter()

const slice = createSlice({
  name: 'customers',
  initialState: adapter.getInitialState(),
  reducers: {
    addCustomers: adapter.addMany,
    addCustomer: adapter.addOne,
  }
});

export const customersReducer = slice.reducer;

export const { addCustomers, addCustomer } = slice.actions;
