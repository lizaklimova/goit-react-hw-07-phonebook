import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import ContactsForm from "../ContactsForm";
import { Container, ContactsSection } from "./App.styled";
import ContactsList from "components/ContactsList/ContactsList";
import { selectContacts, selectIsLoading } from "../../redux/selectors";
import FilterSearch from "components/FilterSearch/FilterSearch";

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm />

        <ContactsSection>
          <h2>Contacts</h2>
          <FilterSearch />

          {contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <p>No contacts added yet</p>
          )}
        </ContactsSection>
      </Container>
    </>
  );
}
