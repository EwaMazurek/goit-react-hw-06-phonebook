import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

let contactsInitialState;
if (localStorage.getItem('contacts') !== null)
  contactsInitialState = JSON.parse(localStorage.getItem('contacts'));
else contactsInitialState = [];

const filterInititalState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filterReducer = createReducer(filterInititalState, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
