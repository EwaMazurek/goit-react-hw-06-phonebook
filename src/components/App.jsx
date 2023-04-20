import { Form } from './form/Form';
import { ContactList } from './contactsList/ContactList';
import { ContactsFilter } from './filter/ContactsFilter';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContact);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactList />
    </div>
  );
};
