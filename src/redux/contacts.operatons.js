import { fetchContacts,addContactAPI } from 'sevices/mockaAPI';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const addContact = createAsyncThunk(
  'conatcts/addContact',
  async (data, thunkAPI) => {
    try {
      const contacts = await addContactAPI(data);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
    'contacts/get',
    async(_,thunkAPI) => {
        try{
            const contacts = await fetchContacts();
            return contacts
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
