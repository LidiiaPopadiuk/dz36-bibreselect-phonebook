import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { fetchContacts, deleteContact, addContact } from "./contactsOperation";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  find: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    setFind: {
      reducer(state, action) {
        state.find = action.payload;
      },
      prepare(name) {
        return {
          payload: name,
        };
      },
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(deleteContact.pending, (state) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        (cont) => cont.id !== action.payload,
      );
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(addContact.pending, (state) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
  },
});

export const { setFind } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
