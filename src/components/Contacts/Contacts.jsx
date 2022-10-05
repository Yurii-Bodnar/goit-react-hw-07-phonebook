import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts.operatons';
import { deleteContact } from 'redux/contanctsSlice';
import css from './Contacts.module.css';

const Contacts = () => {
  const filterState = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) dispatch(getContacts());
  }, [dispatch, contacts]);

  const filterContacts = (contacts, filterState) => {
    return filterState
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterState.toLowerCase())
        )
      : contacts;
  };

  const filteredContacts = filterContacts(contacts, filterState);
  // console.log(filteredContacts);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filteredContacts?.map(({ name, id, phone }) => {
          // console.log(name);
          return (
            <li key={id} className={css.item}>
              <p className={css.text}>
                {name}: <span>{phone}</span>
              </p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
