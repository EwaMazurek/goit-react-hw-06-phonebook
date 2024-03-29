//Stwórz działanie
//zapisywania
//usuwania kontaktu
//odświeżania filtru

import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filter/setFilter');
