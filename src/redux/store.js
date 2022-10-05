
import { contactsReduser } from './contanctsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';


const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },

});

export default store;
