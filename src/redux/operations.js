import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://633c208ff11701a65f6f8cea.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
  
    async(_, {rejectWithValue} ) => {
    try {
        const {data } = await axios.get("/contacts");
      
      return data;
    } catch (error) {
     
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, {rejectWithValue}) => {
    try {
      const { data } = await axios.post('/contacts', { ...contact });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);