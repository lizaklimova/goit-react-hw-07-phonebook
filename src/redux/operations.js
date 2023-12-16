import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://657d8eff3e3f5b189462bb67.mockapi.io/api";

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", newContact, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);
