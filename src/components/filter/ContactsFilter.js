import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    const query = event.target.value;
    console.log(query);
    dispatch(setFilter(query));
  };
  return (
    <>
      <label>Find contacts by name </label>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
      />
    </>
  );
};
