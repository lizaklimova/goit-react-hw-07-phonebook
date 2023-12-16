export const selectContacts = ({ contacts }) => contacts.contacts.items;
export const selectFilterSearch = (state) => state.filterSearch.filter;
export const selectIsLoading = ({ contacts }) => contacts.contacts.isLoading;
