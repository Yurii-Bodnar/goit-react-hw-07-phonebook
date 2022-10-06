import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contacts.operatons';
import { contactItems, filterItems } from 'redux/contactsSelector';

import css from './Contacts.module.css';

const Contacts = () => {
  const filterState = useSelector(filterItems);
  const contacts = useSelector(contactItems);

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



export default Contacts;
