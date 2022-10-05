import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};
