import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterSearchReducer } from "./filterSearchSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterSearch: filterSearchReducer,
  },
});
