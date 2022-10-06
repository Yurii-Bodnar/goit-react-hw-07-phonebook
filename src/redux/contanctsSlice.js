import { addContact, getContacts, deleteContact } from './contacts.operatons';

const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      return { ...state, isLoading: false, items: payload };
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});


export const contactsReduser = contactsSlice.reducer;
