import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContact, getFilter } from 'redux/selectors';
import { Contact } from 'components/contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
