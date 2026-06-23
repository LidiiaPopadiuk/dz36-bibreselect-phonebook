import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://6a3ab4a0917c7b14c74dfcfa.mockapi.io/te";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const fetchContacts = await axios.get(`${baseUrl}/contacts`);
      const data = fetchContacts.data;
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const remContact = await axios.delete(`${baseUrl}/contacts/${contactId}`);
      const data = remContact.data;
      return contactId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const addContact = await axios.post(`${baseUrl}/contacts`, contactData);
      const data = addContact.data;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
