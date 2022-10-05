import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contanctsSlice';
import css from './Contacts.module.css';

const Contacts = () => {
  const filterState = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filterContacts = (contacts, filterState) => {
    return filterState
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterState.toLowerCase())
          
        )
      : contacts;
  };

  const dispatch = useDispatch();
  const filteredContacts = filterContacts(contacts, filterState);
  // console.log(filteredContacts);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filteredContacts?.map(({ name, id, number }) => {
          // console.log(name);
          return (
            <li key={id} className={css.item}>
              <p className={css.text}>
                {name}: <span>{number}</span>
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
