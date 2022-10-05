import { addContact, getContacts } from './contacts.operatons';

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
  },
  // reducers: {
  //   addContacts: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: Date.now(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.items.findIndex(contact => contact.id === action.payload);
  //     state.items.splice(index, 1);
  //   },
  // },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
