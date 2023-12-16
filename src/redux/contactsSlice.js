import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => [
        ...state.contacts,
        payload,
      ])
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) =>
        state.contacts.filter((contact) => contact.id !== payload)
      )
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
