import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
  contacts.error = null;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

const handleFulfilled = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.items = payload;
  contacts.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.error = null;
        contacts.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.error = null;
        contacts.items = contacts.items.filter(
          (contact) => contact.id !== payload
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
