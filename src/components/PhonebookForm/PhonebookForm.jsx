import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contanctsSlice';
import css from './PhonebookForm.module.css';
import Notiflix from 'notiflix';

const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items)
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmitt = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value
        if (
      contacts.filter(contact => {
        return contact.name === name;
      }).length
    ) {
      return Notiflix.Notify.warning(`${name} in already in contacts`);
    }
    dispatch(addContacts(name,number));
    reset();
  };

  const id = nanoid();

  return (
    <>
      <form className={css.container} onSubmit={handleSubmitt}>
        <label htmlFor={id}>
          <p className={css.text}>Name</p>
          <input
            className={css.inputValue}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            id={id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={id}>
          <p className={css.text}>Number</p>
          <input
            className={css.inputValue}
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            id={id}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          add conttact
        </button>
      </form>
    </>
  );
};


export default PhonebookForm;
